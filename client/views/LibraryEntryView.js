// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td><span class="glyphicon <%= starred %>"></span></td><td><%= artist %></td><td><%= title %></td><td><%= playCount %></td><td><button class="add-to-q btn btn-primary pull-right">Add</button></td>'),
  initialize: function(){
    console.log(this.model.get('starred'))
    var that = this
    this.model.on('play', function(){
      console.log("changed the library entry")
      that.render()
      console.log(that.model.attributes)
    })
  },
  events: {
    'click .add-to-q': function(){
      this.model.enqueue()
      this.render()
    },
    'click .glyphicon': function(){
      if(this.model.get('starred') === "glyphicon-star"){
        this.model.unstar()
      } else {
        this.model.star()
      }
      this.render()
    }


  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
