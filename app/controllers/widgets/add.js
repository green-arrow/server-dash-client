import Ember from 'ember';

export default Ember.Controller.extend({
    needs: 'activeProfile',
    isShowing: false,
    showingDetails: false,
    actions: {
        cancel: function() {
            var that = this;

            that.set('isShowing', false);

            setTimeout(function() {
                that.transitionToRoute('active-profile', that.get('controllers.activeProfile.model.id'));
            }, 700);
        }
    }
});
