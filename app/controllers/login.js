import BaseController from 'server-dash-client/controllers/base-controller';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';

export default BaseController.extend(LoginControllerMixin, {
    authenticator: 'authenticator:custom',
    errorHeader: 'Unable to login!',
    errorMessage: 'Please correct the following errors:',
    actions: {
        authenticate: function() {
            var that = this;
            this._super().then(null, function(errors) {
                if(errors.length) {
                    that.set('errorList', errors);
                    that.set('hasError', true);
                }
            });
        }
    }
});
