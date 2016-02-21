var gulp = require('gulp'),
    del = require('del'),
    browserSync = require('browser-sync').create(),
    inlineCss = require('gulp-inline-css'),
    sass = require('gulp-sass'),
    smoosher = require('gulp-smoosher'),
    plumber = require('gulp-plumber'),
    gutil = require('gulp-util'),
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
    .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('css'));

});




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

// deletes existing folders in output which will be replaced by inlined versions of _input files
gulp.task('clean:output', function() {
    return del([
        '_output/**/*'
        ]);
    });

// delets tmp folder that is created to add media queries
gulp.task('clean:tmp', function() {
    return del([
       'tmp'
        ]);
    });

//------------------------
// Browsersync Gulp Task
//------------------------


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // gulp.watch("_input/sass/.scss", ['sass']);
    gulp.watch("_input/*.html").on('change', browserSync.reload);

});



//------------------------
// Task Config
//------------------------

//default gulp task.
gulp.task('default', ['sass', 'watch', 'browser-sync']);

// Pulls in media queries, css, then deletes tmp folder
gulp.task('build', function(callback) {
  runSequence('clean:output', 'sass','smoosher','inlineCss', 'clean:tmp',
              callback);
});

