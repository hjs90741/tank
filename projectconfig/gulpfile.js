/*
 * @Author: canaddy 
 * @Date: 2016-12-10 17:54:01 
 * @Last Modified by: canaddy
 * @Last Modified time: 2017-04-11 20:50:02
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');


gulp.task('watch', ()=>{
    console.log('运行文件检测！');
    browserSync.init({
        server : "./"
    });

    // 检测当前项目的所有文件是否有变化
    // gulp.watch('*').on('change', browserSync.reload);
    gulp.watch('src/**/*.{js}').on('change', browserSync.reload);
    gulp.watch('res/**/*.*').on('change', browserSync.reload);
});
