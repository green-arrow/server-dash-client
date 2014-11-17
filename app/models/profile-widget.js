import DS from 'ember-data';

export default DS.Model.extend({
    sortOrder: DS.attr('number'),
    widget: DS.belongsTo('widget')  
});
