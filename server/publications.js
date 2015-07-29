Meteor.publish('messagesIndex', function() {
  return Messages.find({owner: this.userId});
});

Meteor.publish('messagesDetail', function(id) {
  return Messages.find({_id: id});
});

Meteor.publish('practiceIndex', function() {
  return CollPractice.find({owner: this.userId});
});

Meteor.publish('practiceDetail', function(id) {
  return CollPractice.find({_id:id});
})

