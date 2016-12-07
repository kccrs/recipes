import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  photo: '',
  servings: '',
  time: '',
  ingredients: '',
  directions: '',
  notes: '',

  actions: {
    createRecipe() {
      const recipe = this.getProperties('name', 'photo', 'servings', 'time', 'ingredients', 'directions', 'notes');

      this.get('store').createRecord('recipe', recipe).save().then(() => {
        this.setProperties({
          name: '',
          photo: '',
          servings: '',
          time: '',
          ingredients: '',
          directions: '',
          notes: ''
         });
      });
    }
  }
});
