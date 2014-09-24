// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %><button class="add-to-q">Add</button><td><%= playCount %></td></td>'),
  initialize: function(){
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
    }

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
