'use strict'

const gulp = require('gulp')
const connect = require('gulp-connect')
const open = require('gulp-open')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const concat = require('gulp-concat')
const standard = require('gulp-standard')

var clientConfig = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
    html: 'src/*.html',
    js: ['src/js/**/*.js', 'src/js/**/*.jsx'],
    images: 'src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'src/css/index.css'
    ],
    dist: 'dist',
    entryPoint: 'src/js/index.jsx',
    indexPage: 'src/index.html'
  }
}

gulp.task('connect', () => {
  connect.server({
    root: [clientConfig.paths.dist],
    port: clientConfig.port,
    base: clientConfig.devBaseUrl,
    fallback: clientConfig.paths.indexPage,
    livereload: true
  })
})

gulp.task('open', ['connect'], () => {
  gulp.src(__filename)
    .pipe(open({uri: clientConfig.devBaseUrl + ':' + clientConfig.port + '/'}))
})

gulp.task('html', () => {
  gulp.src(clientConfig.paths.html)
    .pipe(gulp.dest(clientConfig.paths.dist))
    .pipe(connect.reload())
})

gulp.task('js', () => {
  browserify(clientConfig.paths.entryPoint, {
    extensions: ['.js', '.jsx']
  })
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(clientConfig.paths.dist + '/js'))
    .pipe(connect.reload())
})

gulp.task('css', () => {
  gulp.src(clientConfig.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(clientConfig.paths.dist + '/css'))
    .pipe(connect.reload())
})

gulp.task('images', () => {
  gulp.src(clientConfig.paths.images)
    .pipe(gulp.dest(clientConfig.paths.dist + '/images'))
    .pipe(connect.reload())
})

gulp.task('lint', () => {
  return gulp.src(clientConfig.paths.js)
    .pipe(standard())
    .pipe(standard.reporter('default'))
})

gulp.task('watch', () => {
  gulp.watch(clientConfig.paths.html, ['html'])
  gulp.watch(clientConfig.paths.js, ['js', 'lint'])
  gulp.watch(clientConfig.paths.css, ['css'])
})

gulp.task('default', ['html', 'js', 'css',
  'images', 'lint', 'open', 'watch'])
