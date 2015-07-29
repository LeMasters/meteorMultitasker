PracticeIndexController = RouteController.extend({
  waitOn:function() {
    Meteor.subscribe('practiceIndex');
  },
  
  action: function() {
    this.render();
  }
});