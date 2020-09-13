const gulp = require('gulp');

module.exports = function html() {
  return gulp.src('source/index.html')
    .pipe(gulp.dest('build'))
};