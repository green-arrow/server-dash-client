import Ember from 'ember';

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
        toggleSidebar: function() {
            var current = this.get('mobileSidebarVisible');
            this.set('mobileSidebarVisible', !current);
        }
    }
});
