(ns clatter.core
  (:require [clojure.string :as string]))

(defonce PI js/Math.PI)
(defonce HALF-PI (/ PI 2))
(defonce $ js/jQuery)
(defonce is-mobile (some #(>= (.indexOf (.-userAgent js/navigator) %1) 0)
                         ["iPhone" "iPad" "iPod" "Android"]))

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
    (let [geometry (doto (.-geometry mesh)
                     (.computeBoundingBox))
          max (.-max (.-boundingBox geometry))
          min (.-min (.-boundingBox geometry))
          x (* -0.5 (- (.-x max) (.-x min)))
          y (* -0.5 (- (.-y max) (.-y min)))
          z (* -0.5 (- (.-z max) (.-z min)))]
      (.applyMatrix geometry (.makeTranslation (js/THREE.Matrix4. ) x y z)))
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


(defrecord World [boundary-length scene camera light
                  renderer controls sprites]
  IWorld
  (spawn [this]
    (.set (.-position camera) 0 0 boundary-length)
    (doseq [l [light (js/THREE.AmbientLight. 16r444444)]] (.add scene l))
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
         (-> (.-position light)
             (.set (.-x pos) (.-y pos) (.-z pos))
             (.normalize)))
       (doseq [sprite @sprites] (animate sprite))
       (.simulate scene)
       (.render renderer scene camera)
       (js/requestAnimationFrame render-frame))))
    
  (put-boundary [this]
    (let [half-boundary (/ boundary-length 2)]
      (doseq [[pos rot] [[[0 0 (- half-boundary)] [0 0 0]]
                         [[0 0 half-boundary]     [0 0 0]]
                         [[0 (- half-boundary) 0] [HALF-PI 0 0]]
                         [[0 half-boundary 0]     [HALF-PI 0 0]]
                         [[(- half-boundary) 0 0] [0 HALF-PI 0]]
                         [[half-boundary 0 0]     [0 HALF-PI 0]]]]
        (put-plane this pos rot))))
  
  (put-plane [this pos rot]
    (let [geometry (js/THREE.PlaneGeometry. boundary-length boundary-length 1 1)
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
    
    (let [size (/ boundary-length 5)
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
  (change-mute [this evt])
  (play-sound [this text])
  (clear [this evt])
  (keypress [this evt])
  (message [this]))


(defrecord Clatter [world audio-map mute]
  IApplication
  (start [this]
    (spawn world)
    (bind this)
    (render world)
    (message this))

  (bind [this]
    (let [button-holder ($ ".button-holder")
          sound-button (doto ($ "<button/>" (clj->js {:id "sound-button"
                                                      :class "pure-button btn"}))
                         (.append ($ "<i/>" (clj->js {:class "fa fa-volume-up"})))
                         (.on "click" (fn [evt] (change-mute this evt))))
          clear-button (doto ($ "<button/>" (clj->js {:id "clear-button"
                                                      :class "pure-button btn"}))
                         (.append ($ "<i/>" (clj->js {:class "fa fa-undo"})))
                         (.on "click" (fn [evt] (clear this evt))))]
      (-> button-holder
          (.append sound-button)
          (.append clear-button))
      (when is-mobile
        (let [keyboard-button (doto ($ "<button/>" (clj->js {:id "keyboard-button"
                                                             :class "pure-button btn"}))
                                (.append ($ "<i/>" (clj->js {:class "fa fa-keyboard-o"})))
                                (.on "click" (fn [] (.focus ($ "input")))))]
          (.append button-holder keyboard-button))))
    (.keypress ($ js/document) (fn [evt] (keypress this evt)))
    (.resize ($ js/window) (fn [evt] (update-projector world)))
    (.appendChild js/document.body (.-domElement (:renderer world))))
    
  (change-mute [this evt]
    (let [$sound-button ($ "#sound-button")
          $i ($ "#sound-button > i")
          classes ["fa-volume-off" "fa-volume-up"]
          [remove add] (if @mute classes (rseq classes))]
      (-> $i
          (.removeClass remove)
          (.addClass add))
      (reset! mute (not @mute))))
  
  (play-sound [this text]
    (when-let [audio-tag (get audio-map text)]
      (try
        (when-not (.-ended audio-tag)
          (.pause audio-tag)
          (set! (.-currentTime audio-tag) 0))
        (.play audio-tag)
        (catch js/Object e))))
  
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
    (let [$message ($ "<div/>" (clj->js {:id "message"
                                         :class "message"}))]
      (-> $message
          (.text (if (.-webgl js/Detector)
                   (str (when is-mobile "Tap here and ") "Type something.")
                   "Your browser does not seem to support WebGL. Please confirm setting or change browser."))
          (.on "click" (fn [] (.focus ($ "input"))))
          (.insertAfter "header")
          (.fadeIn 3000))
      (.addEventListener js/document
                         "keypress"
                         (fn remove-message[]
                           (.remove $message)
                           (.removeEventListener js/document
                                                 "keypress"
                                                 remove-message))))))


(.on ($ js/window)
     "load"
     (fn [] (let [width (.-innerWidth js/window)
                  height (.-innerHeight js/window)
                  camera (js/THREE.PerspectiveCamera. 45 (/ width height) 1 10000)
                  renderer (doto (js/THREE.WebGLRenderer. (clj->js {:antialias true}))
                             (.setClearColor 16rffffff))
                  world (World. (max width height)
                                (doto (js/Physijs.Scene.)
                                  (.setGravity (js/THREE.Vector3. 0 0 0)))
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

