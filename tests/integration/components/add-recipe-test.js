import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('add-recipe', 'Integration | Component | add recipe', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{add-recipe}}`);

  assert.equal(this.$('.name-label').text().trim(), 'Recipe Name');
  assert.equal(this.$('.photo-label').text().trim(), 'Upload Photo');
  assert.equal(this.$('.servings-label').text().trim(), 'Number of Servings');
  assert.equal(this.$('.time-label').text().trim(), 'Cook Time');
  assert.equal(this.$('.ingredients-label').text().trim(), 'Ingredients');
  assert.equal(this.$('.directions-label').text().trim(), 'Directions');
  assert.equal(this.$('.notes-label').text().trim(), 'Notes');

  // Template block usage:
  // this.render(hbs`
  //   {{#add-recipe}}
  //     template block text
  //   {{/add-recipe}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
