Template.linkPage.helpers({
  surveyNotes: function() {
    return Meteor.user().profile.surveyNotes;
  }
});