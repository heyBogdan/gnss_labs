var gulp            = require('gulp');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglify');
var sass            = require('gulp-sass');
var concatCss       = require('gulp-concat-css');
var uglifycss       = require('gulp-uglifycss');
var cssmin          = require('gulp-cssmin');
var autoprefixer    = require('gulp-autoprefixer');
var babel           = require('gulp-babel');
var sourcemaps      = require('gulp-sourcemaps');
// var source          = require('vinyl-source-stream');
// var buffer          = require('vinyl-buffer');


const paths = {
  styles: {
    src: './public/sass/*.scss',
    dist: './dist/'
  },
  scripts: {
    src: [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        // './node_modules/nouislider/distribute/nouislider.min.js',
        './public/javascripts/*.js'
    ],
    dist: './dist/'
  },
  libs: {
    src: './index.js',
    dist: '../static/libs/'
  }
};

function sassTask() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(concatCss("bundle.min.css"))
        .pipe(cssmin())
        .pipe(uglifycss({
            "maxLineLen": 1000,
            "uglyComments": true
        }))
        .pipe(sourcemaps.write('./'))       
        .pipe(gulp.dest(paths.styles.dist));
}

function appTask() {
    return gulp.src(paths.scripts.src)
        .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(concat("bundle.min.js"))
            .pipe(uglify())
            .pipe(gulp.dest(paths.scripts.dist))
        .pipe(sourcemaps.write('./'))    
}


function watchTask() {
    gulp.watch(paths.scripts.src, appTask);
    gulp.watch(paths.styles.src, sassTask);
}

// exports.styles  = sassTask;
// exports.scripts = appTask;
// exports.watch   = watchTask;

// var build = gulp.parallel(sassTask, appTask);

gulp.task('buildCSS',sassTask);
gulp.task('buildJS',appTask);
gulp.task('build', ['buildCSS','buildJS']);
gulp.task('watch',['buildCSS','buildJS'], watchTask);
