// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    this.set({playCount: 0})
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.increaseCount();
    this.trigger('play', this);
  },
  enqueue: function(){
    app.attributes.songQueue.add(this);
    this.set({inQueue: true});
    if(app.attributes.songQueue.models.length === 1){
      app.attributes.songQueue.trigger('hasSongs')
    }
    app.attributes.songQueue.trigger('change')
  },
  dequeue: function(){
    if (this === app.attributes.songQueue.models[0] && (app.attributes.songQueue.models.length > 1)) {
      app.attributes.songQueue.remove(this);
      app.attributes.songQueue.trigger('change')

      app.attributes.songQueue.trigger('hasSongs');
    } else {
      app.attributes.songQueue.remove(this);
      app.attributes.songQueue.trigger('change')
    }
  },
  star: function(){
    this.set({starred: true})
  },
  unstar: function(){
    this.set({starred: false})
  },
  increaseCount: function(){
    this.set({playCount: this.get('playCount')+1});
    console.log("count increased")
    console.log(this.ge)
  }


});
