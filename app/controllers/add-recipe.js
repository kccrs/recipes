import Ember from 'ember';

export default Ember.Controller.extend({
  newName: '',
  newPhoto: '',
  newServings: '',
  newTime: '',
  newIngredients: '',
  newDirections: '',
  newNotes: '',
  newFavorite: '',

  actions: {
    createRecipe() {
      this.store.createRecord('recipe', {
        name: this.get('newName'),
        photo: this.get('newPhoto'),
        servings: this.get('newServings'),
        time: this.get('newTime'),
        ingredients: this.get('newIngredients'),
        directions: this.get('newDirections'),
        notes: this.get('newNotes'),
        favorite: this.get('newFavorite'),
      })
      .save().then((data) => {
        this.transitionToRoute('recipe-detail', data);
        // this.set({
        //   name: '',
        //   photo: '',
        //   servings: '',
        //   time: '',
        //   ingredients: '',
        //   directions: '',
        //   notes: '',
        //   favorite: ''
        //  });
      });
    }
  }
});
