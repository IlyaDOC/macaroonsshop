'use strict'
const {src, dest, watch, series} = require('gulp');
const less = require('gulp-less');
const path = require('path');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');


exports.less = function () {
    return src('./css/styles.less')
        .pipe(less({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist'));
}


exports.watch = function () {
    watch('./css/*.less', series('less'))
}
