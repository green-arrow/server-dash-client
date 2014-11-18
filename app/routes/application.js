import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
    init: function() {
        this._super();
        this.updateApplicationUser();
    },
    updateApplicationUser: function() {
        var that = this,
            session = that.get('session');

        if(session && session.isAuthenticated && session.content.user && session.content.user.id) {
            that.store.find('user', session.content.user.id).then(function (user) {
                that.controllerFor('application').set('user', user);
            });
        }
    }.observes('session.isAuthenticated')
});
