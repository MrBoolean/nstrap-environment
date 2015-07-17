'use strict';

var gulp     = require('gulp'),
    eslint   = require('gulp-eslint'),
    mocha    = require('gulp-mocha'),
    coverage = require('gulp-coverage');

gulp.task('lint', function lint() {
  return gulp
    .src(['!node_modules', '**/*.js'])
    .pipe(eslint({
      configFile: '.eslintrc'
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
  ;
});

gulp.task('test', function test() {
  return gulp
    .src(['test/**/*.test.js'], { read: false })
    .pipe(coverage.instrument({
      pattern:        ['lib/**/*', 'index.js'],
      debugDirectory: 'dist/debug'
    }))
    .pipe(mocha())
    .pipe(coverage.gather())
    .pipe(coverage.format([
      {
        reporter: 'lcov',
        outFile:  'lcov.info'
      },
      {
        reporter: 'html',
        outFile:  'coverage.html'
      }
    ]))
    .pipe(gulp.dest('dist/'))
  ;
});

gulp.task('default', ['lint', 'test']);