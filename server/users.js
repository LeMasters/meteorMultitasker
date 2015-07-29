Accounts.onCreateUser(function(options, user) {
  user.profile = options.profile?
    options.profile: {};
  return user;
});

Meteor.users.allow({
  update: function(userId, doc, fields, modifier) {
    return doc.owner === userId;
  }
});