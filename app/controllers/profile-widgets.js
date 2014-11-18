import Ember from 'ember';
import BaseController from 'server-dash-client/controllers/base-controller';

export default BaseController.extend(Ember.Evented, {
    needs: 'activeProfile',
    profileBinding: 'controllers.active-profile.model',
    widgetDataBinding: 'controllers.active-profile.widgetData',
    profileObserver: function() {
        this.trigger('profileChanged');
    }.observes('profile.id'),
    actions: {
        save: function() {
            var that = this,
                toSave = [];

            that.get('model.content').forEach(function(item) {
                if(item.get('isDirty')) {
                    toSave.push(item);
                }
            });

            toSave.invoke('save');
        }
    }
});
