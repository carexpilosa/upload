babel --presets react,es2015 public_html/js/source/ -d public_html/js/build
browserify public_html/js/build/index.js -o public_html/js/app.js
