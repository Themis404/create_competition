const gulp = require('gulp');
const concat = require("gulp-concat");
const eslint = require('gulp-eslint');
const browserSync = require('browser-sync');
const lazyLoad = require('gulp-load-plugins')();
const cleanCSS = require('gulp-clean-css');
const sassGlob = require('gulp-sass-glob');
const del = require('del');

const APPLICATION_DIST_PATH = "./dist";



const buildStyles = (serve = false) => {
    let result = gulp.src('./source/styles/common.scss')
        .pipe(sassGlob())
        .pipe(lazyLoad.sourcemaps.init())
        .pipe(lazyLoad.sass({ style: 'expanded' })).on('error', errorHandler('Sass'))
        .pipe(lazyLoad.autoprefixer()).on('error', errorHandler('Autoprefixer'));
    if (!serve) {
        result = result.pipe(cleanCSS({ compatibility: 'ie9' }));
    }
    result = result.pipe(lazyLoad.sourcemaps.write())
        .pipe(concat('all.css'))
        .pipe(gulp.dest(`${APPLICATION_DIST_PATH}`));
    return result;
};
/** GULP TASKS */

gulp.task('clean', callback => del(APPLICATION_DIST_PATH, callback));


gulp.task('lint', () => {
    return gulp.src(['./src/**/*.js', './src/**/*.jsx'])
        .pipe(eslint())
        .pipe(eslint.format());
});

gulp.task('sass:serve', () => {
    return buildStyles(true);
});

gulp.task('sass', () => {
    return buildStyles();
});

gulp.task('styles-reload', () => {
    return buildStyles().pipe(browserSync.stream());
});