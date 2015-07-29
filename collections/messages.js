Messages = new Meteor.Collection('messages');

Messages.allow({
  update: function(userId, doc, fields, modifier) {
    return doc.owner === userId;
  }
});
