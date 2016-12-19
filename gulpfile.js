var gulp = require('gulp');
var less = require('gulp-less');
var minify = require ('gulp-minify-css');
var rename = require ('gulp-rename');
var browserSync = require ('browser-sync').create();

gulp.task('browserSync', function(){
   browserSync.init({
      server: {
         baseDir: './'
      },
   });
});
// Task Less
gulp.task('less', function () {
   gulp.src('source/style/app.less')
   .pipe(less())
   .pipe(minify())
   .pipe(rename({
      suffix: '.min'
   }))
   .pipe(gulp.dest('public/css'));
   // .pipe(browserSync.reload({
   //    stream: true
   // }));
});

// Task Watcher
gulp.task('watch', /*['browserSync'],*/ function(){
   gulp.watch('source/style/**/*', ['less']);
   //gulp.watch('public/css/app.min.css', browserSync.reload);
   //gulp.watch('index.html', browserSync.reload);
   // gulp.watch('source/script/**/*', ['default']);
});

// Task Build
gulp.task('build', ['less']);

// Task Default
gulp.task('default', ['build']);
