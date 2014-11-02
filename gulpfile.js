var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var plumb = require('gulp-plumber');

gulp.task('scss', function () {
    watch('./css/*.scss', function () {
        gulp.src('./css/main.scss')
            .pipe(plumb())
            .pipe(sourcemaps.init())
            .pipe(sass())
            .pipe(sourcemaps.write('./', {includeContent: false}))
            .pipe(gulp.dest('./css'))
        ;
    });
});