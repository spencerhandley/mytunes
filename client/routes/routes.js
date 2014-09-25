var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'showQuads',
    'home': "showQuads",
    'seasons/:season': "getSeason"
  }
});
var appRouter = new AppRouter()

appRouter.on('route:showQuads', function(){
  $('.containerHold').html(seasonsView.render());
})
appRouter.on('route:getSeason', function(season){
    $('body').first().removeClass().addClass(season)
    $('table').removeClass().addClass('table').addClass('table-'+season+'')
    // this.render()
  })

Backbone.history.start();
