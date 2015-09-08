var gulp = require('gulp');

var jshint = require('gulp-jshint');
var seq = require('sequence-stream');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var templateCache = require('gulp-angular-templatecache');

gulp.task('lint', function(){
    return gulp.src('js/*js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('scripts', function(){

    var vendors = gulp.src([
        'client/vendors/angular/angular.js',
        'client/vendors/angular-ui-router/release/angular-ui-router.js'
    ]);

    var app = gulp.src([
        'client/js/app/app.js',
        'client/js/**/*.js'
    ]);

    var views = gulp.src('client/js/**/*.html')
        .pipe(templateCache({
            module: 'app'
        }));

    // Combine all the streams
    return seq([vendors, app, views])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('dist'));
});
