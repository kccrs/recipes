import DS from 'ember-data';
// require('electron');
// import database from '../../database';
const database = requireNode('../../database');
// global.database = database;

export default DS.Adapter.extend({

  findAll() {
    return database.select().from('recipes');
  },

  // findRecord(store, type, id, record) {
  // },

  createRecord(type, record) {
    return database('recipes').insert({
      name: record.name,
      photo: record.photo,
      servings: record.servings,
      time: record.time,
      ingredients: record.ingredients,
      directions: record.directions,
      notes: record.notes,
      favorite: record.favorite
    });
    // console.log('something happened');
  },
});
