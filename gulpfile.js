var gulp = require('gulp'),
  connect = require('gulp-connect');

var path = {
  html: '*.html',
  js: './app/**/*.js'
};

gulp.task('html', function() {
  gulp.src(path.html)
    .pipe(connect.reload());
});

gulp.task('js', function() {
  gulp.src(path.js)
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch([path.html], ['html']);
  gulp.watch([path.js], ['js']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('default', ['connect', 'watch']);
