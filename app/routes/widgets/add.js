import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    renderTemplate: function() {
        this.render({ outlet: 'addWidget' });
    },
    model: function() {
        return this.store.find('widget', { profileId: this.modelFor('activeProfile').get('id') });
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('widgetData', this.controllerFor('activeProfile').get('widgetData'));
    }
});
