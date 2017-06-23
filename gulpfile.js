var gulp = require('gulp');

var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var notify = require("gulp-notify");

var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-csso');

gulp.task('browser-sync', ['less'], function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });

  gulp.watch('asset/less/**/*.less', ['less']);
  gulp.watch("**/*.html").on('change', browserSync.reload);
  gulp.watch("**/*.css").on('change', browserSync.reload);
});


gulp.task('less', function() {
  return gulp.src(['asset/less/**/*.less', '!asset/less/**/_*.less'])
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(less())
		.pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('asset/css'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['browser-sync']);
