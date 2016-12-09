import DS from 'ember-data';
// require('electron');
// import database from '../../database';
const database = requireNode('../database');

export default DS.Adapter.extend({

  findAll() {
    return database.select().from('recipes');
  },

  findRecord(store, type, id) {
    return database.select().from('recipes').where('id', id);
  },

  createRecord(store, type, record) {
    let data = this.serialize(record);
    database('recipes').insert(data).then(([id]) => {
      database.select().from('recipes').where('id', id).then(result => {
        let recipe = result[0];
        return {"recipe": recipe};
      });
    });
  },
});
