Emberman.StoriesRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('story');

    return this.store.filter('story', function(story) {
      return !story.get('isNew');
    });
  }
});
