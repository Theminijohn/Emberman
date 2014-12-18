Emberman.Router.map(function() {
  this.resource('stories');
  this.resource('story', { path: '/stories/:story_id' });
});
