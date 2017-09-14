var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var prefix = require('gulp-autoprefixer');

//Html
gulp.task('html', function () {
  gulp.src('public/**/*.html')
    .pipe(livereload());
});

//Compress images
gulp.task('image', function() {
  gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('public/assets/images/'));
});

// Hangle scripts
gulp.task('scripts', function() {
  gulp.src('src/js/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/js/'))
    .pipe(livereload());
});

// Hangle sass
gulp.task('styles', function() {
  gulp.src('src/scss/**/*.scss')
    .pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(prefix())
    .pipe(gulp.dest('public/assets/css/'))
    .pipe(livereload());
});

//Gulp watch
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/images/*', ['image']);
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/scss/**/*.scss', ['styles']);
  gulp.watch('public/**/*.html', ['html'])
});

gulp.task('default', ['scripts', 'styles', 'image', 'watch']);
