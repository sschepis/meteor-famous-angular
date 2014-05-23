#!/bin/sh
bower install
mkdir -p dist
cat bower_components/famous-angular/dist/famous-angular.js splendsome.js > dist/meteor-famous-angular.js
