import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';
import ENV from '../config/environment';

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
    //beforeModel: function() {
    //    Ember.$.ajaxSetup({
    //        xhrFields: {
    //            withCredentials: true
    //        },
    //        crossDomain: true
    //    });
    //},
    //model: function() {
    //    return Ember.$.getJSON(ENV.APP.adapter.host + '/api/users/current');
    //},
    //setupController: function(controller, model) {
    //    var user = this.store.pushPayload('user', model);
    //    controller.set('userId', model.user.id);
    //}
});
