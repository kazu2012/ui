// ライブラリの読み込み
var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require("gulp-plumber");
var browserSync = require('browser-sync').create();

// サーバ起動 + less, html ファイルの監視
gulp.task('serve', ['less'], function() {
    browserSync.init({
        server: "./src"
    });
    gulp.watch("src/*.less", ['less']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

// less を css にコンパイル + ブラウザに注入（反映）
gulp.task('less', function() {
	return gulp.src('src/*.less')
		.pipe(plumber())  // コンパイルエラーが発生しても監視を止めない。
		.pipe(less())
		.pipe(gulp.dest('src'))
		.pipe(browserSync.stream());
});

gulp.task('default', ['serve']);