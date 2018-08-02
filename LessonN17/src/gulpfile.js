var gulp = require('gulp');
var bs = require('browser-sync');
var sass = require('gulp-sass');
var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
//var plumber = require('gulp-plumber');


// Запускаем сервер, предварительно скопилировав SASS
gulp.task('serve', ['sass'], function() {

    bs.init({
      server: "./"
    });

    //gulp.watch("./sass/*.sass", ['sass']);
    //gulp.watch("./index.html").on('change', bs.reload);
    gulp.watch("./sass/*.sass", function(event, cb){
    	setTimeout(function(){
    		gulp.start('sass');
    		}, 1000);
    });
    gulp.watch("./*.html").on('change', bs.reload);
});


// Делаем компиляцию SASS в CSS 
gulp.task('sass', function() {
 return gulp.src("./sass/*.sass")
 	 //.pipe(plumber())
   .pipe(sass())
   .pipe(gulp.dest("./css"))
   .pipe(bs.stream());
});

gulp.task('default', ['serve']);

gulp.task( 'deploy', function () {

	var conn = ftp.create( {
		host:     '88.99.94.73',
		user:     'zhdan893',
		password: 'oMwG49S3VP',
		log:      gutil.log
	} );

	var globs = [
		'./**'
	];

	// using base = '.' will transfer everything to /public_html correctly
	// turn off buffering in gulp.src for best performance

	return gulp.src( globs, { base: '.', buffer: false } )
		.pipe( conn.newer( '/www/zhdanovsv.ru/lessonN17/src' ) ) // only upload newer files
		.pipe( conn.dest( '/www/zhdanovsv.ru/lessonN17/src' ) );

} );