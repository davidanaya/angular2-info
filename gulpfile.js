const gulp = require('gulp');
const ts = require('gulp-typescript');
const concat = require('gulp-concat');
const Builder = require('systemjs-builder');
const del = require('del');

// systemjs-builder
const builder = new Builder('.', 'systemjs.config.js');

// typescript transpiler
var tsProject = ts.createProject('tsconfig.json', {
    typescript: require('typescript')
});

gulp.task('deploy:all', ['clean', 'bundle', 'resources'], () => {
  gulp.src(['web/**/*']).pipe(gulp.dest('C:/AO/IDS/OIS/docs/web'));
})

gulp.task('deploy', () => {
  gulp.src(['web/**/*']).pipe(gulp.dest('C:/AO/IDS/OIS/docs/web'));
})

gulp.task('clean', () => {
  return del([
      'C:/AO/IDS/OIS/docs/web/**/*'
    ], {force: true});
})

gulp.task('bundle', () => {
  builder.buildStatic('app/*.js', 'web/bundle.app.js')
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('error ' + err);
  })
})

gulp.task('resources', () => {
  gulp.src([
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.js',
    'node_modules/reflect-metadata/Reflect.js',
    'node_modules/systemjs/dist/system.src.js'
  ]).pipe(gulp.dest('web/lib'));

  gulp.src([
    'resources/images/**/*'
  ]).pipe(gulp.dest('web/images'));

  gulp.src([
    'resources/fonts/**/*'
  ]).pipe(gulp.dest('web/fonts'));

  gulp.src([
    'app/**/*.html'
  ]).pipe(gulp.dest('web/app'));

  gulp.src([
    'resources/css/**/*.css', 
    'node_modules/primeui/themes/omega/theme.css',
    'node_modules/primeui/primeui-ng-all.min.css'])
    .pipe(concat('bundle.app.css'))
    .pipe(gulp.dest('web'));

  gulp.src([
    'app/**/*.css'
  ]).pipe(gulp.dest('web/app'));

  gulp.src([
    'index.html',
    'favicon.ico'
  ]).pipe(gulp.dest('web'));
});

gulp.task('ts', function(done) {
  var tsResult = tsProject.src([
      'app/**/*.ts'
    ])
    .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('app/js'));
});
