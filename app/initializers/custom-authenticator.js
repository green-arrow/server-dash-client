import Ember from 'ember';
import Base from 'simple-auth/authenticators/base';
import ENV from '../config/environment';

var CustomAuthenticator = Base.extend({
    restore: function(data) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            if(data.user.id) {
                Ember.$.ajax({
                    url: ENV.APP.adapter.host + '/api/users/current',
                    type: 'GET',
                    xhrField: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    success: function(response) {
                        if(response.user.id === data.user.id) {
                            resolve({ user: response.user });
                        } else {
                            reject();
                        }
                    },
                    error: function(response) {
                        reject(response);
                    }
                });
            } else {
                reject();
            }
        });

    },
    authenticate: function(options) {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                type: 'POST',
                url: ENV.APP.adapter.host + '/api/session/login',
                data: {
                    email: options.identification,
                    password: options.password
                },
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                success: function(response) {
                    resolve({ user: response.user });
                },
                error: function(response) {
                    if(response.status === 400) {
                        reject(response.responseJSON.errors);
                    } else {
                        console.error('Authentication Error: ', response);
                        reject();
                    }
                }
            });
        });
    },
    invalidate: function() {
        return new Ember.RSVP.Promise(function(resolve, reject) {
            Ember.$.ajax({
                type: 'GET',
                url: ENV.APP.adapter.host + '/api/session/logout',
                success: function() {
                    resolve();
                },
                error: function(result) {
                    reject(result);
                }
            });
        });
    }
});

export function initialize(container) {
    container.register('authenticator:custom', CustomAuthenticator);
}

export default {
    name: 'authentication',
    before: 'simple-auth',
    initialize: initialize
};
