CollPractice = new Meteor.Collection('practiceCollection');

CollPractice.allow({
  update: function(userId, doc, fields, modifier) {
    return doc.owner === userId;
  }
});

