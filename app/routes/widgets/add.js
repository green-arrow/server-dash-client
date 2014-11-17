import AuthBaseRoute from '../authorized-base';

export default AuthBaseRoute.extend({
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
