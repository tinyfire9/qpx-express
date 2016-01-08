var gulp = require('gulp');
var shell = require('gulp-shell');
var rimraf = require('rimraf');
var run = require('run-sequence');
var watch = require('gulp-watch');
var server = require('gulp-live-server');

var express;
const paths = {
	js : ['./src/**/*.js'],
	destination : './app'
};

gulp.task('default', function(callback){
	run('server', 'build','watch', callback);
});

gulp.task('build', function(callback){
	run('clean', 'babel', 'restart', callback);
});

gulp.task('clean', function(callback){
	rimraf(paths.destination, callback);
});

gulp.task('babel', shell.task([
	'babel src --out-dir app'
]));

gulp.task('server', function(){
	express = server.new(paths.destination);
});
gulp.task('server', () => {
  express = server.new(paths.destination);
});
gulp.task('restart', function(){
	express.start.bind(express)();
});

gulp.task('watch', function(){
	return watch(paths.js, function(){
		gulp.start('build');
	});
});