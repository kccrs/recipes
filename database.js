require('sqlite3');

const database = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: './recipeStorage.sqlite'
  }
});

database.schema.hasTable('recipes').then((exists) => {
  if (!exists) {
    return database.schema.createTable('recipes', (t) => {
      t.increments('id').primary();
      t.string('name');
      t.string('photo');
      t.integer('servings');
      t.string('time');
      t.text('ingredients');
      t.text('directions');
      t.text('notes');
      t.boolean('favorite');
    });
  }
});

module.exports = database;
