'use strict';

const gulp         = require('gulp');
const bundleSCSS   = require('./bundleSCSS');
const bundleJS     = require('./bundleJS');
const browserify   = require('gulp-browserify');
const html2bemjson = require('./html2bemjson');
const handlebars   = require('./handlebars');
const sass         = require('gulp-sass');

gulp.task('scss:bundle', function () {
	return gulp.src('./dist/html/**/*.html')
		.pipe(bundleSCSS())
		.pipe(gulp.dest('./src/bundles/'));
});

gulp.task('scss:build', function () {
	return gulp.src('./src/bundles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('scss:watch', function () {
	gulp.watch('./src/blocks/**/*.scss', ['scss:build']);
});

gulp.task('js:bundle', function () {
	return gulp.src('./dist/html/**/*.html')
		.pipe(bundleJS())
		.pipe(gulp.dest('./src/bundles/'));
});

gulp.task('js:build', function() {
	gulp.src('./src/bundles/**/*.js', { read: false })
		.pipe(browserify({
			transform: ['babelify']
		}))
		.pipe(gulp.dest('./dist/js'))
});

gulp.task('js:watch', function () {
	gulp.watch('./src/blocks/**/*.js', ['js:build']);
});

gulp.task('html2bemjson', function () {
	return gulp.src('./src/templates/**/*.html')
		.pipe(html2bemjson())
		.pipe(gulp.dest('./src/bundles/'));
});

gulp.task('handlebars', function () {
	return gulp.src('./src/templates/**/*.hbs')
		.pipe(handlebars())
		.pipe(gulp.dest('./dist/html/'));
});