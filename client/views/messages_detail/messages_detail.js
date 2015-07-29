Template.messagesDetail.events({
  'click #backbutton': function() {
    Router.go('messagesIndex');
    var d = new Date();
    var n = d.getTime();
    App.track('Back to Inbox', {currentTime: n});
  }
});