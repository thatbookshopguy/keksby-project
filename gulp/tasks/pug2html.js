const gulp = require('gulp');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const htmlValidator = require('gulp-w3c-html-validator');

module.exports = function pug2html(cb) {
  return gulp.src('src/index.pug')
  .pipe(plumber())
  .pipe(pug())
  .pipe(htmlValidator())
  .pipe(gulp.dest('build'));
};

