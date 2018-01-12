const gulp = require("gulp");
const stylus = require("gulp-stylus");
const watch = require("gulp-watch");

gulp.task('stylus', () => {
    return gulp.src("./src/stylus/*.styl")
        .pipe(stylus())
        .pipe(gulp.dest("./src/css"))
})

gulp.task('watch', () => {
    gulp.watch('./src/stylus/*.styl', ['stylus'])
});


gulp.task("default", ['stylus', 'watch']);