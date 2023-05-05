const gulp = require('gulp');
const { src, series, parellel, dest, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const minify = require('gulp-minify');
const cleanCSS = require('gulp-clean-css');
const notify = require('gulp-notify');


gulp.task('bundleStyle', () => {
    return gulp.src('assets/src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie11'}))
        .pipe(gulp.dest('assets/dist/css/'));
});

gulp.task("designStyle", () => {
    return gulp
      .src("uams-design-variables/src/bundles/**/*.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer())
      .pipe(cleanCSS({ compatibility: "ie11" }))
      .pipe(gulp.dest('assets/dist/css/bundles/'));
  });


gulp.task('watch', () => {
    gulp.watch(['assets/src/scss/**/*.scss','blocks/**/*.scss'], (done) => {
        gulp.series(['bundleStyle'])(done);
    });

    gulp.watch(['uams-design-variables/src/bundles/**/*.scss'], (done) => {
        gulp.series(['designStyle'])(done);
    });
});

gulp.task('default', gulp.series(['bundleStyle', 'designStyle']));



