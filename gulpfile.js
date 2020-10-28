const
	gulp = require('gulp'),
	uglify = require('gulp-uglify')
;

gulp.task('js', done => gulp.src('globalXml.js').pipe(uglify()).pipe(gulp.dest('dist')).on('end', () => done()));
gulp.task('default', gulp.series('js'));
