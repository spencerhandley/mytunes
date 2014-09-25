// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SeasonView = Backbone.View.extend({
  className: "col-sm-6",
  template: _.template("<div class='<%= name %>' style='background: url(<%= background %>);'> <a href='#/seasons/<%= value %>'><h2> <%= name %> </h2></a></div>"),
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
