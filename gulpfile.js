var gulp = require('gulp')
var connect = require('gulp-connect')
var open = require('gulp-open')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var concat = require('gulp-concat')
var standard = require('gulp-standard')

var clientConfig = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: 'src/*.html',
    js: 'src/js/**/*.js',
    images: 'src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'src/css/index.css'
    ],
    dist: 'dist',
    entryPoint: 'src/js/index.js',
    indexPage: 'src/index.html'
  }
}

gulp.task('connect', function () {
  connect.server({
    root: [clientConfig.paths.dist],
    port: clientConfig.port,
    base: clientConfig.devBaseUrl,
    fallback: clientConfig.paths.indexPage,
    livereload: true
  })
})

gulp.task('open', ['connect'], function () {
  gulp.src(__filename)
    .pipe(open({uri: clientConfig.devBaseUrl + ':' + clientConfig.port + '/'}))
})

gulp.task('html', function () {
  gulp.src(clientConfig.paths.html)
    .pipe(gulp.dest(clientConfig.paths.dist))
    .pipe(connect.reload())
})

gulp.task('js', function () {
  browserify(clientConfig.paths.entryPoint)
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(clientConfig.paths.dist + '/js'))
    .pipe(connect.reload())
})

gulp.task('css', function () {
  gulp.src(clientConfig.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(clientConfig.paths.dist + '/css'))
    .pipe(connect.reload())
})

gulp.task('images', function () {
  gulp.src(clientConfig.paths.images)
    .pipe(gulp.dest(clientConfig.paths.dist + '/images'))
    .pipe(connect.reload())
})

gulp.task('lint', function () {
  return gulp.src(clientConfig.paths.js)
    .pipe(standard())
    .pipe(standard.reporter('default'))
})

gulp.task('watch', function () {
  gulp.watch(clientConfig.paths.html, ['html'])
  gulp.watch(clientConfig.paths.js, ['js', 'lint'])
  gulp.watch(clientConfig.paths.css, ['css'])
})

gulp.task('default', ['html', 'js', 'css',
  'images', 'lint', 'open', 'watch'])
