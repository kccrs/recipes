import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      replace: true
    }
  },

});
