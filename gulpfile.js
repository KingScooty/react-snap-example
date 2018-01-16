var gulp = require('gulp');
var dom = require('gulp-dom');

gulp.task('html', function() {
    return gulp.src('./build/index.html')
        .pipe(dom(function() {
            console.log(this.querySelectorAll('#root'));
            return this.querySelectorAll('#root')[0].innerHTML
        }, false))
        .pipe(gulp.dest('./build/compiled/'));
});
