import Base from 'simple-auth/authorizers/base';

var CustomAuthorizer = Base.extend({
    authorize: function(jqXHR, requestOptions) {
        console.log('*****custom authorizer*****');
        requestOptions.xhrFields = { withCredentials: true };
        requestOptions.crossDomain = true;
    }
});

export function initialize(container) {
    container.register('authorizer:custom', CustomAuthorizer);
}

export default {
    name: 'authorization',
    before: 'simple-auth',
    initialize: initialize
};
