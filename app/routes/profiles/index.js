import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    redirect: function() {
        var profile = this.modelFor('profiles').content[0];
        this.transitionTo('active-profile', profile);
    }
});
