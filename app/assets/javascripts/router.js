Emberman.Router.map(function() {
  this.resource('stories', function() {
    this.resource('story', { path: ':story_id' });
  });
});
