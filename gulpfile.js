'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', gulp.series(function () {
    return gulp.src(['assets/scss/*.scss'])
    .pipe(sass({outputStyle: 'expanded', includePaths: ['node_modules']}).on('error', sass.logError))
	.pipe(gulp.dest('assets/css'))
}));
gulp.task('watch', gulp.series(function () {
    gulp.watch(['node_modules/bootstrap/scss/**/*.scss', 'assets/scss/*.scss'], gulp.parallel(['sass']));
}));
gulp.task('default', gulp.series(['sass', 'watch']));
