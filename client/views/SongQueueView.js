// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {
    var that = this
    this.render();
    var that = this
    this.collection.on('hasSongs', function(){
      that.collection.models[0].play();
      that.collection.models[0].trigger('change')
      that.render()
    })
    this.collection.on('change', function(){
      console.log(app.attributes.songQueue.length)
      that.render()
    })
  },
  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
