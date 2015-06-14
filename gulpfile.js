var gulp = require('gulp'),
    inlineCss = require('gulp-inline-css'),
    sass = require('gulp-sass'),
    smoosher = require('gulp-smoosher'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
    clean = require ('gulp-clean'),
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload,
    runSequence = require('run-sequence');

// lets gulp throw errors during watch without stopping
  var onError = function (err) {
  gutil.beep();
  console.log(err);
};


//------------------------
// Sass Gulp Task
//------------------------
gulp.task('sass', function () {
    gulp.src('_input/sass/*.scss')
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sass())
        .pipe(gulp.dest('css'));
});


//------------------------
// BrowserSync
//------------------------

// This works, the only thing is, it can't link to the css folder. I might gulp copy the css folder from input to output on build...


// gulp.task('serve', function () {

//     // Serve files from the root of this project
//     browserSync.init({
//         server: {
//             baseDir: "./_input"
//         }
//     });
//     // Any change within the input file will reload the browser
//     gulp.watch("_input/**").on("change", browserSync.reload);
// });




//------------------------
// Watch Gulp Task
//------------------------
gulp.task('watch', function(){
    gulp.watch('_input/sass/**/*.*', ['sass'])

});

//------------------------
// Smoosher Gulp Task
//------------------------
gulp.task('smoosher', function () {
   return gulp.src('_input/*.html')
        .pipe(smoosher())
        .pipe(gulp.dest('tmp'));
});


//------------------------
// InlineCss Gulp Task
//------------------------
gulp.task('inlineCss', function() {
    return gulp.src('tmp/*.html')
        .pipe(inlineCss({

                // Whether to inline styles in <style></style>
                applyStyleTags: false,

                // Whether to resolve <link rel="stylesheet"> tags and inline the resulting styles
                applyLinkTags: true,

                // Whether to remove the original <style></style> tags
                removeStyleTags: false,

                // Whether to remove the original <link rel="stylesheet">
                removeLinkTags: true,

				// Preserves all media queries (and contained styles) within <style></style> tags
                preserveMediaQueries: true,
        }))
        .pipe(gulp.dest('_output/'));
});

//------------------------
// Clean Gulp Task
//------------------------
gulp.task('clean', function(){
    return gulp.src('tmp', {read:false})
        .pipe(clean());
});


//------------------------
// Task Config
//------------------------
gulp.task('default', ['sass', 'watch']);

// Pulls in media queries, css, then deletes tmp folder
gulp.task('build', function(callback) {
  runSequence('sass','smoosher','inlineCss', 'clean',
              callback);
});

