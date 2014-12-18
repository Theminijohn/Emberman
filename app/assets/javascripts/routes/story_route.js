// For more information see: http://emberjs.com/guides/routing/

Emberman.StoryRoute = Ember.Route.extend({

  mode: function(params) {
    return this.store.find('story', params.story_id)
  }

});
