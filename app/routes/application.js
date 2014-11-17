import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Route.extend({
    beforeModel: function() {
        Ember.$.ajaxSetup({
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true
        });
    },
    model: function() {
        return Ember.$.getJSON(ENV.APP.adapter.host + '/api/users/current');
    },
    setupController: function(controller, model) {
        var user = this.store.pushPayload('user', model);
        controller.set('userId', model.user.id);
    }
});
