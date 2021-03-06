import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    icon: DS.attr('string'),
    user: DS.belongsTo('user'),
    profileWidgets: DS.hasMany('profileWidget', { async: true })
});
