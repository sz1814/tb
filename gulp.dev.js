var gulp = require('gulp');

var connect = require('gulp-connect');

gulp.task('default',['allFile','server','watch'], function() {
  // 将你的默认的任务代码放在这
});

gulp.task('allFile',function(){
    gulp.src('app/**/*')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

gulp.task('watch',function(){
    gulp.watch('app/**/*',['allFile'])
})
gulp.task('server', function() {
    connect.server({
        root:'dist',
        livereload:true,
        port:8080
    });
  });