import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// Nested
// Router.map(function() {
//   this.route('index', { path: '/', function() {
//     this.route('recipe-detail', { path: '/:recipe_id' });
//     this.route('all-recipes');
//     this.route('add-recipe');
//   }});
// });

Router.map(function() {
  this.route('recipe-detail', { path: '/:recipe_id' });
  this.route('all-recipes');
  this.route('add-recipe');
});

export default Router;
