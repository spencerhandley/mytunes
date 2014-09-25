// SongModel.js - Defines a backbone model class for songs.
var SeasonModel = Backbone.Model.extend({
  initialize: function(season){
    this.set({name: season.name })
    this.set({background: season.background})
  }
});
