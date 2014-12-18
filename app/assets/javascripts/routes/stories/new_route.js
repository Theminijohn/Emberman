// For more information see: http://emberjs.com/guides/routing/

Emberman.StoriesNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('story');
  },

  actions: {
    create: function(story) {
      story.save();
      this.transitionTo('stories');
    }
  }
});
