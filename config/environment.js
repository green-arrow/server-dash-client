/* jshint node: true */

module.exports = function (environment) {
    var ENV = {
        modulePrefix: 'server-dash-client',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        contentSecurityPolicy: {
            'img-src': "'self' data:",
            'style-src': "'self' 'unsafe-inline'"
        },
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            adapter: {
                host: 'http://localhost:3000',
                namespace: 'api'
            }
        }
    };

    ENV['simple-auth'] = {
        authenticator: 'authenticator:custom',
        authorizer: 'authorizer:custom',
        store: 'simple-auth-session-store:local-storage'
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;

        /* CSP */
        ENV.contentSecurityPolicy['connect-src'] = "'self' http://localhost:3000";

        /* Simple Auth */
        ENV['simple-auth'].crossOriginWhitelist = [ 'http://localhost:3000' ];
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'auto';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};
