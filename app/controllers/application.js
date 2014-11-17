import Ember from 'ember';
import ENV from 'server-dash-client/config/environment';

export default Ember.Controller.extend({
    user: null,
    userId: null,
    firstLogin: null,
    mobileSidebarVisible: false,
    viewingProfile: false,
    updateCurrentPath: function() {
        this.set('viewingProfile', this.get('currentPath').indexOf('profiles') > -1);
    }.observes('currentPath'),
    userObserver: function() {
        var userId = this.get('userId'),
            user;

        if(userId) {
            user = this.store.find('user', userId);
            this.set('user', user);
            this.set('firstLogin', user.get('firstLogin'));
        }

    }.observes('userId'),
    actions: {
        logout: function() {
            var that = this;

            Ember.$.ajax({
                type: 'GET',
                url: ENV.APP.adapter.host + '/api/session/logout',
                success: function() {
                    that.set('userId', undefined);
                    that.transitionToRoute('login');
                },
                error: function(result) {
                    console.error('Something bad happened: ' + result);
                }
            });
        },
        toggleSidebar: function() {
            var current = this.get('mobileSidebarVisible');
            this.set('mobileSidebarVisible', !current);
        }
    }
});
