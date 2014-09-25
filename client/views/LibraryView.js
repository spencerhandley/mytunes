// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",
  className: "table",

  initialize: function() {
    this.render();
    this.on('change', function(){
      this.render()
    })
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<tr><th>Library</th></tr><tr><td>Starred</td><td>Artist</td><td>Title</td><td>Add</td><td>PlayCount</td></tr>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
