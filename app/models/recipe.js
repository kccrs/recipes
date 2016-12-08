import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  photo: DS.attr('string'),
  servings: DS.attr('number'),
  time: DS.attr('string'),
  ingredients: DS.attr('string'),
  directions: DS.attr('string'),
  notes: DS.attr('string'),
  favorite: DS.attr('boolean', { defaultValue: false }),
});
