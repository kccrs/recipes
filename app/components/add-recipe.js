import Ember from 'ember';

export default Ember.Component.extend({
  // store: Ember.inject.service(),

  tagName: 'section',
  classNames: ['add-recipe'],

  name: '',
  photo: '',
  servings: '',
  time: '',
  ingredients: '',
  directions: '',
  notes: '',

  actions: {
    // createRecipe() {
    //   const recipe = this.getProperties('name', 'photo', 'servings', 'time', 'ingredients', 'directions', 'notes');

      // this.get('store').createRecord('recipe', recipe).save().then(() => {
      //   this.setProperties({
      //     name: '',
      //     photo: '',
      //     servings: '',
      //     time: '',
      //     ingredients: '',
      //     directions: '',
      //     notes: ''
      //    });
      // });
    }
  }
});
