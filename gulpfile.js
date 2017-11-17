
var gulp = require('gulp');
var browserify = require('browserify');
var watch = require('watchify');
});

gulp.task('jsBrowserify', ['concatInterface'], function() {

  return browserify({ entries: ['./tmp/allConcat.js']})

    .transform(babelify.configure({

      presets: ["es2015"]

    }))
