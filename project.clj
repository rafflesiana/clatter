(defproject clatter "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "https://github.com/rafflesiana/clatter/"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.7.0"]
                 [org.clojure/clojurescript "1.7.48"
                  :exclusions [org.apache.ant/ant]]]
  :plugins [[lein-cljsbuild "1.0.3"]]
  :cljsbuild {
              :builds [{:source-paths ["src/clatter"],
                        :compiler {
                                   :output-to "js/core.js",
                                   :optimizations :simple,
                                   :pretty-print false}}]})
