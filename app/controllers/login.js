import Ember from 'ember';
import BaseController from 'server-dash-client/controllers/base-controller';
import LoginControllerMixin from 'simple-auth/mixins/login-controller-mixin';
import ENV from 'server-dash-client/config/environment';

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
    //needs: 'application',
    //applicationControllerBinding: 'controllers.application',
    //email: '',
    //password: '',
    //errorHeader: 'Unable to login!',
    //errorMessage: 'Please correct the following errors:',
    //actions: {
    //    login: function() {
    //        var that = this;
    //
    //        Ember.$.ajax({
    //            type: 'POST',
    //            url: ENV.APP.adapter.host + '/api/session/login',
    //            data: {
    //                email: this.get('email'),
    //                password: this.get('password')
    //            },
    //            xhrFields: {
    //                withCredentials: true
    //            },
    //            crossDomain: true,
    //            success: function(result) {
    //                that.applicationController.set('userId', result.userId);
    //                that.applicationController.set('firstLogin', result.firstLogin);
    //
    //                that.set('email', '');
    //                that.set('password', '');
    //                that.set('hasError', false);
    //
    //                if(result.firstLogin) {
    //                    that.transitionToRoute('accountSetup');
    //                }
    //                else {
    //                    that.transitionToRoute('profiles');
    //                }
    //            },
    //            error: function(result) {
    //                that.handleAjaxError(result);
    //            }
    //        });
    //    }
    //}
});
