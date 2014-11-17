import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    displayName: DS.attr('string')  
});
