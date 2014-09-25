// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",
className: "table",
  initialize: function() {
    var that = this
    this.render();
    var that = this;
    if (this.collection.models.length > 0) {
      console.log(this.collection.models.length)
      console.log("I should definitely be playing")
      console.log(this.collection.models[0])
      this.collection.models[0].play();
    }
    this.collection.on('hasSongs', function(){
      console.log("should be playing")
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

    this.$el.html('<tr><th>Queue</th></tr><tr><td>Artist</td><td>Title</td><td>Remove</td></tr>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
