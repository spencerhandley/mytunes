// LibraryView.js - Defines a backbone view class for the music library.
var SeasonsView = Backbone.View.extend({

  className: "quads",

  initialize: function() {
    this.render();
    this.on('change', function(){
      this.render()
    });
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<tr><th>Sounds Of </th><th></th><th><a href="#/seasons/summer" class="button-summer">Summer</a><a href="#/seasons/fall" class="button-fall">Fall</a><a href="#/seasons/winter" class="button-winter">Winter</a><a href="#/seasons/spring" class="button-spring">Spring</a></th><td></td><td></td></tr><tr><td class="subheader">Starred</td><td class="subheader">Artist</td><td class="subheader">Title</td><td class="subheader">PlayCount</td><td class="subheader"><span style="margin-right: 8px;" class="pull-right">Add</span></td></tr>').append(
      this.collection.map(function(season){
        return new SeasonView({model: season}).render();
      })
    );
  }

});
