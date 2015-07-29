Template.messagesIndex.helpers({
  messages: function() {
    return Messages.find({},
                        {
                          sort: {priority: -1}
                        });
  }
});
