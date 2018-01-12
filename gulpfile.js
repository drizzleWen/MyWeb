const gulp = require("gulp");
const stylus = require("gulp-stylus");
const watch = require("gulp-watch");

gulp.task('stylus', () => {
    return gulp.src("./stylus/*.styl")
        .pipe(stylus())
        .pipe(gulp.dest("./public/css"))
})

gulp.task('watch', () => {
    gulp.watch('./stylus/*.styl', ['stylus'])
});


gulp.task("default", ['stylus', 'watch']);