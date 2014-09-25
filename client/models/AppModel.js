// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    if (localStorage.getItem('localQueue') !== null) {
      console.log("using local storage")
      this.set('songQueue', new SongQueue(jQuery.parseJSON(localStorage.getItem('localQueue'))));
      if(this.get('songQueue').models.length >0){
        console.log('Queue in storage has length');
        this.attributes.songQueue.trigger('hasSongs');
        this.set('currentSong', this.attributes.songQueue.models[0]);
        this.attributes.currentSong.trigger("change:currentSong");



      }
    } else {
      this.set('songQueue', new SongQueue());
      console.log("using new model")
      this.set('currentSong', new SongModel());
    }


    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      // if(song !== this.get('currentSong')){
      this.set('currentSong', song);
    }, this);
  }

});
