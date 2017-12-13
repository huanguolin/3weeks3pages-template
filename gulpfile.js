// 引入工具
var gulp = require('gulp');
var sass = require('gulp-sass');

// 定义名为 scss 的任务，用于将 scss 编译为 css。
// 这里指定将 ./scss 目录下的所有以 .scss 结尾的文件，
// 编译为对应的 css 文件并输出到 ./css 目录。
gulp.task('scss', function () {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// 定义名为 watch 的任务，用于监视 scss 文件改动，
// 然后自动执行 scss 任务（就是上面定义的任务）。
gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', ['scss']);
});

// 默认任务
gulp.task('default', [ 'scss' ]);