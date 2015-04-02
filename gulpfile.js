var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    sass = require('gulp-sass');

// https://www.npmjs.com/package/gulp-inline-css
gulp.task('inlineCss', function() {
    return gulp.src('_input/*.html')
        .pipe(inlineCss({

                // Whether to inline styles in <style></style>
                applyStyleTags: false,

                // Whether to resolve <link rel="stylesheet"> tags and inline the resulting styles
                applyLinkTags: true,

                // Whether to remove the original <style></style> tags
                removeStyleTags: true,

                // Whether to remove the original <link rel="stylesheet">
                removeLinkTags: true,

								// Preserves all media queries (and contained styles) within <style></style> tags
                preserveMediaQueries: true;
        }))
        .pipe(gulp.dest('_output/'));
});

gulp.task('sass', function () {
    gulp.src('_input/sass/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('_input/css'));
});

gulp.task('watch', function(){
	gulp.watch('_input/sass/*.scss', ['sass'])
})


gulp.task('default', ['sass', 'watch']);
gulp.task('inline', ['sass', 'inlineCss']);