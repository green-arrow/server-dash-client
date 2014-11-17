import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function(params) {
        var that = this,
            store = that.store;

        return store.find('profile', params.profile_id);
    },
    setupController: function(controller, model) {
        controller.set('model', model);
        controller.set('widgetData', {
            general: this.store.find('widgetGeneral', 1),
            diskUsage: this.store.find('widgetDiskUsage', 1),
            processes: this.store.find('widgetProcess', 1)
        });
    }
});
