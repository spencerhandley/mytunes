// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  initialize: function(){
    this.set({playCount: 0})
    this.set({starred: "glyphicon-star-empty"})
  },
  play: function(){
    // Triggering an event here will also trigger the event on the collection
    console.log('model play method triggered')
    if(this !== app.get('currentSong')){
      this.increaseCount();
    }
    this.trigger('play', this);
  },
  enqueue: function(){
    if(app.attributes.songQueue.models.length >0 ){
      var duplicate = false
      for (var i = 0; i < app.attributes.songQueue.models.length; i++) {
        if(app.attributes.songQueue.models[i].attributes.title === this.attributes.title) {
          duplicate = true
        }
        if(!duplicate){
          app.attributes.songQueue.add(this);
          if(app.attributes.songQueue.models.length === 1){
            app.attributes.songQueue.trigger('hasSongs')
          }
          app.attributes.songQueue.trigger('change')
          console.log(app.attributes.songQueue)
          localStorage.setItem('localQueue', JSON.stringify(app.attributes.songQueue))

        }

      };
    } else {
      app.attributes.songQueue.add(this);
      app.attributes.songQueue.trigger('hasSongs')
      app.attributes.songQueue.trigger('change')
      localStorage.setItem('localQueue', JSON.stringify(app.attributes.songQueue))
    }
  },
  dequeue: function(){
    this.trigger('stop',this);
    if (this === app.attributes.songQueue.models[0] && (app.attributes.songQueue.models.length > 1)) {

      app.attributes.songQueue.remove(this);
      app.attributes.songQueue.trigger('change');

      app.attributes.songQueue.trigger('hasSongs');
    } else {
      app.attributes.songQueue.remove(this);
      app.attributes.songQueue.trigger('change')
    }
    localStorage.setItem('localQueue', JSON.stringify(app.attributes.songQueue))

  },
  star: function(){
    this.set({starred: "glyphicon-star"})
  },
  unstar: function(){
    this.set({starred: "glyphicon-star-empty"})
  },
  increaseCount: function(){
    this.set({playCount: this.get('playCount')+1});
    console.log("count increased")
    console.log(this.ge)
  }


});
