import AuthBaseRoute from './authorized-base';

export default AuthBaseRoute.extend({
    renderTemplate: function() {
        this.render({ outlet: 'widgets' });
    },
    model: function() {
        var that = this;

        return that.modelFor('activeProfile').get('profileWidgets');
    },
    setupController: function(controller, model) {
        controller.set('model', model);
    }
});
