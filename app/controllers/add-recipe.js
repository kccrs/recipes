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
      let recipe = this.store.createRecord('recipe', {
        // id: 1000,
        name: this.get('newName'),
        photo: this.get('newPhoto'),
        servings: this.get('newServings'),
        time: this.get('newTime'),
        ingredients: this.get('newIngredients'),
        directions: this.get('newDirections'),
        notes: this.get('newNotes'),
        favorite: this.get('newFavorite'),
      })
      debugger
      recipe.save()
      .then((data) => {
        console.log(data.id);
        this.transitionToRoute('recipe-detail', data.id);
      });
    }
  }
});
