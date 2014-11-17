import Ember from 'ember';

export default function(widgetNameBinding, options) {
    var widgetName = Ember.Handlebars.get(this, widgetNameBinding, options),
        helper = Ember.Handlebars.resolveHelper(options.data.view.container, 'widget-' + widgetName),
        template;
    console.log('render widget helper');
    try {
        template = helper.call(this, options);
    } catch(ex) {
        helper = Ember.Handlebars.resolveHelper(options.data.view.container, 'widget-error');
        template = helper.call(this, options);
    }

    return template;
};
