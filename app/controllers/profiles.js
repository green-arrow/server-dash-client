import BaseController from 'server-dash-client/controllers/base-controller';

export default BaseController.extend({
    needs: 'application',
    mobileSidebarVisibleBinding: 'controllers.application.mobileSidebarVisible',
    actions: {
        selectProfile: function(profile) {
            this.set('mobileSidebarVisible', false);
            this.transitionToRoute('active-profile', profile);
        },
        showAddWidget: function() {
            this.set('mobileSidebarVisible', false);
            this.transitionToRoute('widgets.add');
        }
    }
});
