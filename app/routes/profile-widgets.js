import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    renderTemplate: function() {
        this.render({ outlet: 'widgets' });
    },
    model: function() {
        var that = this;

        return that.modelFor('active-profile').get('profileWidgets');
    },
    setupController: function(controller, model) {
        controller.set('model', model);
    }
});
