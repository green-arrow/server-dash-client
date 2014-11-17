import AuthBaseRoute from './authorized-base';

export default AuthBaseRoute.extend({
    redirect: function() {
        var profile = this.modelFor('profiles').content[0];
        this.transitionTo('activeProfile', profile);
    }
});
