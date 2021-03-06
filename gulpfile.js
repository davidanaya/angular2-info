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

gulp.task('deploy:bundle', ['clean', 'bundle', 'resources'], () => {
  gulp.src(['web/**/*']).pipe(gulp.dest('C:/AO/IDS/OIS/docs/web'));
})

gulp.task('deploy:modules', ['clean', 'modules', 'resources'], () => {
  gulp.src(['web/**/*']).pipe(gulp.dest('C:/AO/IDS/OIS/docs/web'));
})

gulp.task('clean', () => {
  return del([
      'C:/AO/IDS/OIS/docs/web/**/*'
    ], {force: true});
})

gulp.task('bundle', () => {
  builder.bundle('app/*.js', 'web/bundle.app.js')
  .then(function() {
    console.log('Build complete');
  })
  .catch(function(err) {
    console.log('error ' + err);
  })
})

gulp.task('modules', () => {
  // 3rd party
  builder.bundle('app/**/*.js - [app/**/*.js]', 'web/3rdparty.bundle.js', { minify: true });
  // commons
  builder.bundle('[app/shared/**/*.js] + [app/*.js]', 'web/main.bundle.js');
  // modules
  builder.bundle('[app/components/schedules/**/*.js]', 'web/schedules.bundle.js');
  builder.bundle('[app/components/medals/**/*.js]', 'web/medals.bundle.js');
  builder.bundle('[app/components/sports/**/*.js]', 'web/sports.bundle.js');
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
    'resources/css/**/*.css'])
    .pipe(concat('bundle.app.css'))
    .pipe(gulp.dest('web'));

  gulp.src([
    'app/**/*.css'
  ]).pipe(gulp.dest('web/app'));

  gulp.src([
    'index.html',
    'index_bundle.html',
    'favicon.ico',
    'systemjs.config.js'
  ]).pipe(gulp.dest('web'));
});

gulp.task('ts', function(done) {
  var tsResult = tsProject.src([
      'app/**/*.ts'
    ])
    .pipe(ts(tsProject));
  return tsResult.js.pipe(gulp.dest('app/js'));
});
