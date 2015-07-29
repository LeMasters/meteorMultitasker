Meteor.methods({
  insertStarterEmailOne: function() {
    var count = Messages.find({author: "Mary", owner: this.userId}).count();
    if(count === 0) {
      Messages.insert({
        author: "Mary", subject: "Availability for Meeting About Strategic Plan", time: "9:35", details: "I can be there Friday morning or anytime on Thursday. Thanks for scheduling this!", priority: 1, owner: this.userId, has_read: false});
    }
  }
});

Meteor.methods({
  insertStarterEmailTwo: function() {
    var count = Messages.find({author: "Steve", owner: this.userId}).count();
    if(count === 0) {
      Messages.insert({
        author: "Steve", subject: "I Can't Make Friday", time: "10:20", details: "I am still swamped by the end of the year meeting wrap up. I am not sure when I can be there. I guess Wednesday afternoon or Thursday morning. Let me know what you find out.", priority: 2, owner: this.userId, has_read: false});
    }
  }
});

Meteor.methods({
  insertStarterEmailThree: function() {
    var count = Messages.find({author: "Bill", owner: this.userId}).count();
    if(count === 0) {
      Messages.insert({
        author: "Bill", subject: "Back from Vacation Everybody!!", time: "12:08", details: "I am back from vacation on Wednesday so anytime after that.", priority: 4, owner: this.userId, has_read: false});
    }
  }
});

Meteor.methods({
  insertNewEmailOne: function() {
    var count = Messages.find({author: "Susan", owner: this.userId}).count();
    if(count === 0) {
      Messages.insert({
        author: "Susan", subject: "Wait on the Marketing Report", time: "2:27", details: "We are still finalizing some data on the marketing recap for the annual meeting. Don't release any of the data yet.", priority: 5, owner: this.userId, has_read: false});
    ///Notifications.info('You have a new email!');
    }
  }
});

Meteor.methods({
  insertNewEmailTwo: function() {
    var count = Messages.find({author: "Terry", owner: this.userId}).count();
    if(count === 0){
      Messages.insert({author: "Terry", subject: "This week is crazy for me", details: "Thursday or Friday morning is the only time I can do it.", time: "3:02", priority: 6, owner: this.userId, has_read: false});
    }
  }
});

Meteor.methods({
  insertNewEmailThree: function() {
    var count = Messages.find({author: "Joe", owner: this.userId}).count();
    if(count === 0){
      Messages.insert({author: "Joe", subject: "Summary has some challenges", details: "Bob is not happy with the way the final summary looks. We are going to have to figure out how to include his research in a more positive light.", time: "4:35", priority: 7, owner: this.userId, has_read: false});
    }
  }
});

Meteor.methods({
  insertNewEmailFour: function() {
    var count = Messages.find({author: "Rob", owner: this.userId}).count();
    if(count === 0){
      Messages.insert({author: "Rob", subject: "Meeting", details:"Monday and Tuesday afternoon and Thursday before 11:00 AM will work", time: "4:50", priority: 8, owner: this.userId, has_read: false});
    }
  }
});

Meteor.methods({
  practiceEmailOne: function() {
    var count = CollPractice.find({author: "Bob", owner: this.userId}).count();
    if(count === 0) {
      CollPractice.insert({
        author: "Bob", subject: "RE: Meeting next week regarding sales conference", time: "10:20", details: "I am swamped but could meet on Tuesday or Wednesday.", priority: 3, owner: this.userId, has_read: false});
    }
  }
});

Meteor.methods({
  practiceEmailTwo: function() {
    var count = CollPractice.find({author: "Jane", owner: this.userId}).count();
    if(count === 0) {
      CollPractice.insert({
        author: "Jane", subject: "RE: Meeting next week regarding sales conference", time: "12:30", details: "I am going to be on vacation Monday and Tuesday next week, and will need Wednesday to catch up, so I could not meet until Thursday or Friday.", priority: 2, owner: this.userId, has_read: false});
    }
  }
});

Meteor.methods({
  practiceEmailThree: function() {
    var count = CollPractice.find({author: "Diego", owner: this.userId}).count();
    if(count === 0) {
      CollPractice.insert({
        author: "Diego", subject: "RE: Meeting next week regarding sales conference", time: "1:00", details: "This is a top priority for me. I will make myself available whenever you need me.", priority: 1, owner: this.userId, has_read: false});
    }
  }
});