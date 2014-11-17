import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function() {
        var that = this,
            store = that.store;

        return store.find('profile').catch(function(error) {
            if(error.responseJSON && error.responseJSON.firstLogin) {
                that.controllerFor('application').set('firstLogin', true);
                that.transitionTo('account-setup');
            } else {
                throw error;
            }
        });
    }
});
