import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('account');
    this.route('account-setup');
    this.route('login');

    this.resource('profiles', function() {
        this.resource('active-profile', { path: '/:profile_id' }, function() {
            this.resource('profile-widgets', { path: '/' }, function() {
                this.resource('widgets', function() {
                    this.route('add');
                });
            });
        });
    });
});

export default Router;
