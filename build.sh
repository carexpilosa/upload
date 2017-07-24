echo ''
echo '============= babel: ============='
babel --presets react,es2015 public_html/js/source/ -d public_html/js/build

echo ''
echo '============= browserify: ============='
browserify public_html/js/build/index.js -o public_html/js/app.js

#echo ''
#echo '============= webpack: ============='
#webpack public_html/js/build/index.js public_html/js/app.js
