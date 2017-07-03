const gulp = require('gulp');
const concat = require('gulp-concat');
 
gulp.task('intellisense', function() {
  return gulp.src('./types/**/*.d.ts')
    .pipe(concat('magikcraft-intellisense.d.ts'))
    .pipe(gulp.dest('./dist/'));
});