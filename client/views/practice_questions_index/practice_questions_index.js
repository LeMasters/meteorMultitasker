Template.practiceQuestionsIndex.helpers({
  yourNotes: function() {
    return Meteor.user().profile.notes;
  }
});

Template.practiceQuestionsIndex.events({
  'click input[type=submit]': function(e, tmpl) {
    e.preventDefault();
    console.log("Submitted answers");
    
    var q1answer = tmpl.find('input:radio[name=q1]:checked').value;
    var q2answer = tmpl.find('input:radio[name=q2]:checked').value;
    var q3answer = tmpl.find('input:radio[name=q3]:checked').value;
    var q4answer = tmpl.find('input:radio[name=q4]:checked').value;
    var q5answer = tmpl.find('input:radio[name=q5]:checked').value;

    var id = Meteor.userId();
    
    console.log($(q1answer));
    
    Meteor.users.update(id, {
      $set: {
        profile: {
          question1answer: q1answer,
          question2answer: q2answer,
          question3answer: q3answer,
          question4answer: q4answer,
          question5answer: q5answer,
        }
      }
    });
    
    Router.go('practiceAnswers');
  }  
});

/*Template.PracticeQuestionsIndex.helpers({
  getRadioValue: function(radioGroup) {
    var answers = document.getElementsByName(radioGroup);
    for(var i = 0; i < answers.legnth; i++) {
      if(answers[i].checked) {
        return answers[i].value;
      }
    }
  }
});*/
