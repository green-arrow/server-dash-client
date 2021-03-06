import DS from 'ember-data';
import ENV from 'server-dash-client/config/environment';

export default DS.RESTAdapter.extend({
    host: ENV.APP.adapter.host,
    namespace: ENV.APP.adapter.namespace,
    ajax: function(url, method, hash) {
        hash = hash || {}; // hash may be undefined
        hash.crossDomain = true;
        hash.xhrFields = { withCredentials: true };
        return this._super(url, method, hash);
    },
    ajaxError: function(jqXHR, jsonPayload) {
        console.log('********** ajaxError **********');
        return jsonPayload;
    },
    find: function(store, type, id, record) {
        var split = type.typeKey.split('widget'),
            isWidget = split.length === 2 && split[0] === '',
            url = isWidget ? this.buildWidgetUrl(split[1].toLowerCase()) : this.buildURL(type.typeKey, id, record);

        return this.ajax(url, 'GET');
    },
    buildWidgetUrl: function(widgetType) {
        var url = [],
            host = this.get('host'),
            prefix = this.urlPrefix();

        url.push('widgets/' + widgetType);

        if (prefix) { url.unshift(prefix); }

        url = url.join('/');
        if (!host && url) { url = '/' + url; }

        return url;
    }
});
