'use strict';

var gulp = require('gulp');

gulp.task('watch', function(){
    gulp.watch('client/js/**/*.js', ['lint', 'scripts']);
    gulp.watch('client/scss/**/*.scss', ['styles']);
    gulp.watch('client/**/*.html', ['html', 'scripts']);
});