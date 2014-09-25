// LibraryView.js - Defines a backbone view class for the music library.
var LibraryView = Backbone.View.extend({

  tagName: "table",
  className: "table",

  initialize: function() {
    this.render();
    this.on('change', function(){
      this.render()
    });
  },
  events: {
    'click .button-summer': function(){
      console.log('clicked!')
      $('body').first().removeClass().addClass('summer')
      $('table').removeClass().addClass('table')
      this.render()
    },
    'click .button-fall': function(){
      console.log('clicked!')
      $('body').first().removeClass().addClass('fall')
      $('table').removeClass().addClass('table').addClass('table-white')
      this.render()
    },
    'click .button-winter': function(){
      console.log('clicked!')
      $('body').first().removeClass().addClass('winter')
      $('table').removeClass().addClass('table')
      this.render()
    },
    'click .button-spring': function(){
      console.log('clicked!')
      $('body').first().removeClass().addClass('spring');
      $('table').removeClass().addClass('table').addClass('table-white')
      this.render()
    }

  } ,

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    this.$el.children().detach();

    this.$el.html('<tr><th>Sounds Of </th><th></th><th><a href="#" class="button-summer">Summer</a><a href="#" class="button-fall">Fall</a><a href="#" class="button-winter">Winter</a><a href="#" class="button-spring">Spring</a></th><td></td><td></td></tr><tr><td class="subheader">Starred</td><td class="subheader">Artist</td><td class="subheader">Title</td><td class="subheader">PlayCount</td><td class="subheader"><span style="margin-right: 8px;" class="pull-right">Add</span></td></tr>').append(
      this.collection.map(function(song){
        return new LibraryEntryView({model: song}).render();
      })
    );
  }

});
