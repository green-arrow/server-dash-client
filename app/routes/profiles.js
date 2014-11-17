import AuthBaseRoute from './authorized-base';

export default AuthBaseRoute.extend({
    model: function() {
        var that = this,
            store = that.store;

        return store.find('profile').catch(function(error) {
            if(error.responseJSON && error.responseJSON.firstLogin) {
                that.controllerFor('application').set('firstLogin', true);
                that.transitionTo('accountSetup');
            } else {
                throw error;
            }
        });
    }
});
