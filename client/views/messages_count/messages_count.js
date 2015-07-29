Template.messagesCount.helpers({
  totalCount: function() {
    return Messages.find().count();
  }
});