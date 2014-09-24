// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    this.set({inQueue: false})
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },
  enqueue: function(){
    app.attributes.songQueue.add(this);
    this.set({inQueue: true});
    console.log(app.attributes.songQueue.length)
    if(app.attributes.songQueue.models.length === 1){
      app.attributes.songQueue.trigger('hasSongs')
    }
  },
  dequeue: function(){
    if (this === app.attributes.songQueue.models[0] && (app.attributes.songQueue.models.length > 1)) {
      app.attributes.songQueue.remove(this);
      console.log('should change songs')
      app.attributes.songQueue.trigger('change')
      app.attributes.songQueue.trigger('hasSongs');
    } else {
      app.attributes.songQueue.remove(this);
      console.log('should not change songs')
      app.attributes.songQueue.trigger('change')
      console.log(app.attributes)
    }
  },
  star: function(){
    this.set({starred: true})
  },
  unstar: function(){
    this.set({starred: false})
  }


});
