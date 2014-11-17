import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        var session = this.get('session');

        if(session.isAuthenticated && !session.content.user.firstLogin) {
            this.transitionTo('profiles');
        } else if(session.isAuthenticated && session.content.user.firstLogin) {
            this.transitionTo('account-setup');
        }
    }
});
