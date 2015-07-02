var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer');

//Paths
var scssSource = 'components/scss/',
    cssDestination = 'theme_files/css/';

//Tasks
gulp.task('sass', function () {
    return sass(scssSource, {sourcemap: true})
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(autoprefixer('last 2 versions'))
        .pipe(sourcemaps.write('/maps'))
        .pipe(gulp.dest(cssDestination));
});

//Default task and watch expression
gulp.task('default', ['sass']);

gulp.task('watch', function() {
  gulp.watch(scssSource + 'modules/*.scss', ['sass']);
})
