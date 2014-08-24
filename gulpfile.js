var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var preen = require('preen');

gulp.task('default', ['preen'], function() {

})

gulp.task('scripts', function(){
	gulp.src('source/*.js')
	.pipe(concat('concat.js'))
	.pipe(uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('preen', function(cb) {
	return preen.preen({}, cb);
});