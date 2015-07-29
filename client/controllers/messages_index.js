MessagesIndexController = RouteController.extend({
  waitOn:function() {
    Meteor.subscribe('messages_index');
  },
  
  action: function() {
    this.render();
  }
});