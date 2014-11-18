/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    pickFiles = require('broccoli-static-compiler');

var app = new EmberApp();

/* jQuery Plugins */
app.import('bower_components/jquery.cookie/jquery.cookie.js');

/* Bootstrap */
app.import({
    development: 'bower_components/bootstrap/dist/css/bootstrap.css',
    production: 'bower_components/bootstrap/dist/css/boostrap.min.css'
});

var faFonts = pickFiles('bower_components/font-awesome', {
    srcDir: '/fonts',
    files: ['*'],
    destDir: '/assets/fonts'
});

/* Window resize debouncing */
app.import('vendor/jquery.smartresize.js');

/* Dashboard and Packery */
app.import({
    development: 'bower_components/packery/dist/packery.pkgd.js',
    production: 'bower_components/packery/dist/packery.pkgd.min.js'
});

app.import('bower_components/draggabilly/draggabilly.js');

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

module.exports = app.toTree(faFonts);
