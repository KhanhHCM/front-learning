var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError)) // Converts Sass to CSS with gulp-sass
    .pipe(autoprefixer())
    .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass') );
  // Other watchers
})