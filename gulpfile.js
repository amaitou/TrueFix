
let gulp = require('gulp'),
	{ parallel, watch } = require('gulp'),
	livereload = require('gulp-livereload'),
	pug = require('gulp-pug'),
	autoprefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass')(require('sass')),
	concatCss = require('gulp-concat-css'),
	cleanCSS = require('gulp-clean-css'),
	uglify = require('gulp-uglify')

function html()
{
	return gulp
			.src('./src/index.pug')
			.pipe(pug())
			.pipe(gulp.dest('./build'))
			.pipe(livereload())
}

function css()
{
	return gulp
			.src('./src/**/*.scss')
			.pipe(autoprefixer('last 2 versions'))
			.pipe(sass())
			.pipe(concatCss("main.css"))
			.pipe(cleanCSS({compatibility: 'ie8'}))
			.pipe(gulp.dest('./build'))
			.pipe(livereload())

}

function js()
{
	return gulp
			.src('./src/**/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('./build'))
			.pipe(livereload())
}


exports.default =  function()
{
	require('./server.js')
    livereload.listen()
	watch('./src/**/*.pug', html)
	watch('./src/**/*.scss', css)
	watch('./src/**/*.js', js)
}