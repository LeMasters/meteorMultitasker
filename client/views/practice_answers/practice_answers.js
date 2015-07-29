Template.practiceAnswers.helpers({
  correctAnswers: function() {
    var user = Meteor.user();
    var correctCount = 0;
    
    if(user.profile.question1answer === "C") {
        correctCount++;
      }
    
    if(user.profile.question2answer === "A") {
        correctCount++;
      }
    
    if(user.profile.question3answer === "A") {
        correctCount++;
      }
    
    if(user.profile.question4answer === "B") {
        correctCount++;
      }

    if(user.profile.question5answer === "B") {
        correctCount++;
      }
    
    return correctCount;
  }
});