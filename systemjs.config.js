/**
 * System configuration for Angular 2
*/
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app': 'app', // 'dist',
    'schedules': 'app/components/schedules',
    'medals': 'app/components/medals',
    'sports': 'app/components/sports',
    'shared': 'app/shared',
    '@angular': 'node_modules/@angular',
    '@ng-bootstrap': 'node_modules/@ng-bootstrap',
    'rxjs': 'node_modules/rxjs'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app': { main: 'main.js',  defaultExtension: 'js' },
    'rxjs': { defaultExtension: 'js' }
  };

  var ngPackageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@ng-bootstrap/ng-bootstrap',
    'schedules',
    'medals',
    'sports',
    'shared'
  ];
  // Individual files (~300 requests):
  function packIndex(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  }

  function packUmd(pkgName) {
    packages[pkgName] = { main: '/bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  }

  // Add package entries for angular packages
  ngPackageNames.forEach(packIndex);

  var config = {
    map: map,
    packages: packages
  };

  System.config(config);

})(this);
