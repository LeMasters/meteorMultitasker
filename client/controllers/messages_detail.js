MessagesDetailController = RouteController.extend({
  waitOn: function() {
    var id = this.params._id;
    Meteor.subscribe('messages_detail', id);
  },
  
  data: function() {
    var id = this.params._id;
    var message = Messages.findOne({_id: id});
    var d = new Date();
    var n = d.getTime();
    
    if(message)
      App.track('Message View', {subject: message.subject, currentTime: n});
    
    return message;
  },
  
  action: function() {
    this.render();
  }
})