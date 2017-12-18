#!/bin/bash

rm -rf lib
mkdir lib
cp build/static/js/main*.js lib/navbar-offcanvas.js
cp build/static/js/main*.js.map lib/navbar-offcanvas.js.map
cp build/static/css/main*.css lib/navbar-offcanvas.css
cp build/static/css/main*.css.map lib/navbar-offcanvas.css.map
