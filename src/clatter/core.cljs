(ns clatter.core
  (:require [clojure.string :as string]))

(defonce PI js/Math.PI)
(defonce HALF-PI (/ PI 2))
(defonce $ js/jQuery)
(defonce is-mobile (do (some #(>= (.indexOf (.-userAgent js/navigator) %1) 0)
                             ["iPhone" "iPad" "iPod" "Android"])))

;; Physijs settings
(set! (.-worker (.-scripts js/Physijs)) "js/physijs_worker.js")
(set! (.-ammo (.-scripts js/Physijs)) "ammo.js")

(defprotocol Sprite
  (init [this])
  (animate [this]))

(defrecord TextSprite [mesh pos rot force need-force]
  Sprite
  (init [this]
    (set! (.-collisions mesh) 0)
    (.addEventListener mesh
                       "collision"
                       (fn [other linear-velocity angular-velocity]
                         (reset! need-force false)))
    (.set (.-position mesh) (.-x pos) (.-y pos) (.-z pos))
    (.computeBoundingBox (.-geometry mesh))
    (let [max (.-max (.-boundingBox (.-geometry mesh)))
          min (.-min (.-boundingBox (.-geometry mesh)))
          x (* -0.5 (- (.-x max) (.-x min)))
          y (* -0.5 (- (.-y max) (.-y min)))
          z (* -0.5 (- (.-z max) (.-z min)))]
      (.applyMatrix (.-geometry mesh) (.makeTranslation (js/THREE.Matrix4. ) x y z)))
    (.set (.-rotation mesh) (.-x rot) (.-y rot) (.-z rot)))
  
  (animate [this]
    (when @need-force
      (.setLinearVelocity mesh force))))


(defprotocol IWorld
  (spawn [this])
  (update-projector [this])
  (put-boundary [this])
  (put-plane [this pos rot])
  (put-text [this text])
  (delete-old-text [this])
  (clear-texts [this])
  (render [this]))

(defrecord World [border-length scene camera light
                  renderer controls sprites]
  IWorld
  (spawn [this]
    (.setGravity scene (js/THREE.Vector3. 0 0 0))
    (.setClearColor renderer 16rffffff)
    (.set (.-position camera) 0 0 border-length)
    (.add scene light)
    (.add scene (js/THREE.AmbientLight. 16r444444))
    (put-boundary this)
    (update-projector this))
  
  (update-projector [this]
    (let [width (.-innerWidth js/window)
          height (.-innerHeight js/window)]
      (.setSize renderer width height)
      (set! (.-aspect camera) (/ width height))
      (.updateProjectionMatrix camera)))

  (render [this]
    ((fn render-frame []
       (.update controls)
       (let [pos (.-position camera)]
         (.. (.-position light) (set (.-x pos) (.-y pos) (.-z pos)) normalize))
       (doseq [sprite @sprites] (animate sprite))
       (.simulate scene)
       (.render renderer scene camera)
       (js/requestAnimationFrame render-frame))))
    
  (put-boundary [this]
    (let [half-border (/ border-length 2)]
      (doseq [[pos rot] [[[0 0 (- half-border)] [0 0 0]]
                         [[0 0 half-border]     [0 0 0]]
                         [[0 (- half-border) 0] [HALF-PI 0 0]]
                         [[0 half-border 0]     [HALF-PI 0 0]]
                         [[(- half-border) 0 0] [0 HALF-PI 0]]
                         [[half-border 0 0]     [0 HALF-PI 0]]]]
        (put-plane this pos rot))))
  
  (put-plane [this pos rot]
    (let [geometry (js/THREE.PlaneGeometry. border-length border-length 1 1)
          material (.createMaterial js/Physijs
                                    (js/THREE.MeshPhongMaterial. (clj->js {:wireframe false
                                                                           :transparent true
                                                                           :opacity 0
                                                                           :color 0xdddddd}))
                                    0 ;friction
                                    0.7)
          mesh (js/Physijs.BoxMesh. geometry
                                    material
                                    0)]
      (let [[x y z] pos]
        (.set (.-position mesh) x y z))        
      (let [[x y z] rot]
        (.set (.-rotation mesh) x y z))
      (set! (.-collisions mesh) 0)
      (.add scene mesh)))
  
  (put-text [this text]
    (when (>= (count @sprites) 300)
      (delete-old-text this))
    
    (let [size (/ border-length 5)
          geometry (js/THREE.TextGeometry. text
                                           (clj->js {:size size
                                                     :height 50
                                                     :curveSegments 3
                                                     :font "helvetiker"
                                                     :weight "bold"
                                                     :style "normal"
                                                     :bevelThickness 2
                                                     :bevelSize 1.5
                                                     :bevelSegments 2
                                                     :bevelEnabled false}))
          material (.createMaterial js/Physijs
                                    (js/THREE.MeshPhongMaterial.
                                     (clj->js {:color (* 0xffffff (.random js/Math))
                                               :shading js/THREE.SmoothShading}))
                                    0 ;friction
                                    0.2) ;restitution
          mesh (js/Physijs.BoxMesh. geometry
                                    material)
          camera-pos (.-position camera)
          sprite (TextSprite. mesh
                              (.multiplyScalar (.clone camera-pos) 0.45)
                              (.-rotation camera)
                              (.negate (.clone camera-pos))
                              (atom true))]
      (init sprite)
      (swap! sprites conj sprite)
      (.add scene mesh)))
  
  (clear-texts [this]
    (doseq [sprite @sprites]
      (.remove scene (get sprite :mesh)))
    (reset! sprites '()))

  (delete-old-text [this]
    (let [sprite (last @sprites)
          updated-sprites (remove #(= %1 sprite) @sprites)]
      (.remove scene (get sprite :mesh))
      (reset! sprites updated-sprites))))



(defprotocol IApplication
  (start [this])
  (bind [this])
  (sound [this evt])
  (play-sound [this text])
  (clear [this evt])
  (keypress [this evt])
  (message [this])
  (resize [this]))

(defrecord Clatter [world audio-map mute]
  IApplication
  (start [this]
    (spawn world)
    (bind this)
    (render world)
    (message this))
  
  (bind [this]
    (.on ($ "#sound-button") "click" (fn [evt] (sound this evt)))
    (.on ($ "#clear-button") "click" (fn [evt] (clear this evt)))
    (when is-mobile
      (-> ($ "#keyboard-button")
          (.removeClass "hidden")
          (.on "click" (fn [] (.focus ($ "input"))))))
    (.keypress ($ js/document) (fn [evt] (keypress this evt)))
    (.resize ($ js/window) (fn [evt] (resize this)))
    (.appendChild js/document.body (.-domElement (:renderer world))))
    
  (sound [this evt]
    (let [$sound-button ($ "#sound-button")
          $i ($ "#sound-button > i")
          is-mute (.hasClass $sound-button "mute")
          [remove add] (if is-mute
                         (do
                           (.removeClass $sound-button "mute")
                           ["fa-volume-off" "fa-volume-up"])
                         (do
                           (.addClass $sound-button "mute")
                           ["fa-volume-up" "fa-volume-off"]))]
      (-> $i
          (.removeClass remove)
          (.addClass add))
      (reset! mute (not is-mute))))
  
  (play-sound [this text]
    (when-let [audio-tag (get audio-map text)]
      (when-not (.-ended audio-tag)
        (.pause audio-tag)
        (set! (.-currentTime audio-tag) 0))
      (.play audio-tag)))
  
  (clear [this evt]
    (clear-texts world))
  
  (keypress [this evt]
    (let [code (if evt (.-charCode evt) (.-charCode js/event))]
      (when (> code 32)
        (let [char (.. js/String (fromCharCode code) toUpperCase)]
          (when-not @mute
            (play-sound this char))
          (put-text world char)))))

  (message [this]
    (let [$message ($ "<div/>" "message")]
      (-> $message
          (.text (str (when is-mobile "Tap Here and ") "Type Something."))
          (.on "click" (fn [] (.focus ($ "input"))))
          (.addClass "message")          
          (.insertAfter "header")
          (.fadeIn 5000))
      (.addEventListener js/document
                         "keypress"
                         (fn remove-message[]
                           (.remove $message)
                           (.removeEventListener js/document
                                                 "keypress"
                                                 remove-message)))))
  
  (resize [this]
    (update-projector world)))

(.on ($ js/window)
     "load"
     (fn [] (let [width (.-innerWidth js/window)
                  height (.-innerHeight js/window)
                  camera (js/THREE.PerspectiveCamera. 45 (/ width height) 1 10000)
                  renderer (js/THREE.WebGLRenderer. (clj->js {:antialias true}))
                  world (World. (max width height)
                                (js/Physijs.Scene.)
                                camera
                                (js/THREE.DirectionalLight. 16rffffff)
                                renderer
                                (js/THREE.OrbitControls. camera)
                                (atom ()))
                  audio-map (let [nodes ($ "audio")
                                  length (.-length nodes)]
                              (loop [i 0
                                     m {}]
                                (if (< i length)         
                                  (let [tag (.get nodes i)
                                        char (string/replace (.-id tag) #"audio-" "")]
                                    (recur (inc i) (assoc m char tag)))
                                  m)))]
              (start (Clatter. world
                               audio-map
                               (atom false))))))

