var { src, dest, watch, series, parallel } = require('gulp'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  concat = require('gulp-concat'),
  postcss = require('gulp-postcss'),
  replace = require('gulp-replace'),
  sass = require('gulp-sass'),
  sourcemaps = require('gulp-sourcemaps'),
  uglify = require('gulp-uglify-es').default,
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync').create();

  var netlify = require('gulp-netlify')
  gulp.task('deploy', function () {
    gulp.src('./**/*')
      .pipe(netlify({
        site_id: NETLIFY_SITE_ID,
        access_token: '180e59f7c9113a9130cd1afcc20fbcaa61f795ece93cf116bd4fb86222fb95eb'
      }))
  })

// File path variables
const files = {
  scssPath: 'src/scss/**/*.scss',
  jsPath: 'src/js/**/*.js',
  imgPath: 'src/assets/**'
}

// Sass task
function scssTask() {
  return src(files.scssPath)
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest('dist/minified'))
    .pipe(browserSync.stream());
}

// JS task
function jsTask() {
  return src(files.jsPath)
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest('dist/minified'))
    .pipe(browserSync.stream());
}

// IMG task
function imgTask() {
  return src(files.imgPath)
    .pipe(imagemin())
    .pipe(dest('dist/minified/assets'))
    .pipe(browserSync.stream());
}

// Cachebusting TextTrackList
const cbString = new Date().getTime();

function cachBustTask() {
  return src(['index.html'])
    .pipe(replace(/cb=\d+/g, 'cb=' + cbString))
    .pipe(dest('.'));
}

//Watch task
function watchTask() {
  watch([files.scssPath, files.jsPath, files.imgPath],
    parallel(scssTask, jsTask, imgTask));
}

// Development server with browsersync
function runServer() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    }
  });
  gulp.watch(jsPath);
  gulp.watch(scssPath);
  gulp.watch(imgPath);
}

// Default task
exports.default = series(
  parallel(scssTask, jsTask, imgTask),
  cachBustTask,
  watchTask,
  runServer
)
