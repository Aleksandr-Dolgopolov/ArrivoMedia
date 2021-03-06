const gulp = require('gulp');
const script = require('./gulp/tasks/scripts');
const fonts = require('./gulp/tasks/fonts');
// const vendors = require('./gulp/tasks/vendorsJS');
const imageMinify = require('./gulp/tasks/imageMinify');
const styles = require('./gulp/tasks/styles');
const clean = require('./gulp/tasks/clean');
const pug2html = require('./gulp/tasks/pug');
const spriteSVG = require('./gulp/tasks/spriteSVG');
const serve = require('./gulp/tasks/serve');
const spritePNG = require('./gulp/tasks/spritePNG');
const html = require('./gulp/tasks/html');
const css = require('./gulp/tasks/css');
const vendors = require('./gulp/tasks/vendorsJS');

const dev = gulp.parallel(html, css, script, vendors, styles, imageMinify, spriteSVG, spritePNG, fonts);

exports.default = gulp.series(
  clean,
  dev,
  serve
);