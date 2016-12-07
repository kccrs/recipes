import DS from 'ember-data';
import database from '../../database';

export default DS.Adapter.extend({
  findAll() {
    database.select().from('recipes');
  },

  // findRecord(store, type, id, record) {
  // },

  createRecord(store, type, record) {
    database('recipes').insert({
      name: record.name,
      photo: record.photo,
      servings: record.servings,
      time: record.time,
      ingredients: record.ingredients,
      directions: record.directions,
      notes: record.notes,
      favorite: record.favorite
    });
    console.log(record);
  },
});
