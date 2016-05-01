var gulp       = require("gulp");
var react      = require("gulp-react");
var watch      = require('gulp-watch');
var concat     = require('gulp-concat');
var clean      = require('del');
var filelog    = require('gulp-filelog');
var sourcemaps = require('gulp-sourcemaps');
var source     = require('vinyl-source-stream');
var buffer     = require('vinyl-buffer');
var browserify = require('browserify');
var watchify   = require('watchify');
var babel      = require('babelify');

/*========================================
 =                 configs                =
 ========================================*/
var src = require('./gulp.json');

/*========================================
 =                  tasks                 =
 ========================================*/
gulp.task('clean', function () {
  clean(src.destJs);
  clean(src.destApi);
  clean(src.dest);
});

gulp.task('vendor', function () {
  return gulp
    .src(src.vendor)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(src.destJs));
});

function compile(watch) {
  var bundler = watchify(browserify(src.mainJs, { debug: true }).transform(babel));

  function rebundle() {
    bundler.bundle()
      .on('error', function (err) {
        console.error(err);
        this.emit('end');
      })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(src.destJs));
  }

  if (watch) {
    bundler.on('update', function () {
      console.log('-> bundling...');
      rebundle();
    });
  }

  rebundle();
}

function watchBrowserify() {
  return compile(true);
}

gulp.task('browserify', function () {
  return compile();
});

gulp.task('index', function () {
  return gulp
    .src(src.index)
    .pipe(gulp.dest(src.dest));
});

gulp.task('api', function () {
  return gulp
    .src(src.api)
    .pipe(gulp.dest(src.destApi));
});

gulp.task('watch', function () {
  watchBrowserify();

  watch(src.index, function () {
    gulp.start('index');
  });

  watch(src.api, function () {
    gulp.start('api');
  });
});

gulp.task('default', ['clean', 'api', 'vendor', 'browserify', 'index', 'watch']);