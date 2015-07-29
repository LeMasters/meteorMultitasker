Template.recording.rendered = function() {
  if(!this.rendered) {
    var audio = document.getElementById("earnings");
    audio.addEventListener('timeupdate',function (){
      var timeleft = document.getElementById('timeleft'),
          duration = parseInt(audio.duration),
          currentTime = parseInt(audio.currentTime),
          timeLeft = duration - currentTime,
          s, m;
    
      s = timeLeft % 60;
      m = Math.floor(timeLeft/60) % 60;
      s = s < 10 ? "0" + s : s;
      m = m < 10 ? "0" + m : m;
    
      timeleft.innerHTML = m + ":" + s;
      this.rendered = true;
      
    }, false);
  }
};

Template.recording.events({
  'click #playAudio': function(){
    earnings.play();
    var d = new Date();
    var n = d.getTime();
    App.track('Play Audio', {currentTime: n});
  },
  
  'click #pauseAudio': function(){
    earnings.pause();
    var d = new Date();
    var n = d.getTime();
    App.track('Pause Audio', {currentTime: n});
  },
  
  'ended #earnings': function() {
    Session.set("hasEnded", true);
    var d = new Date();
    var n = d.getTime();
    App.track('Audio Ended', {currentTime: n});
  },
  
  'click input[type=submit]': function(e, tmpl) {
    e.preventDefault();
    var notes = tmpl.find('#notes').value;
    var id = Meteor.userId();
    
    Meteor.users.update(id, {
      $set: {
        profile: {
          surveynotes: notes
        }
      }
    });
    
    Router.go('link.page');
  },
  
  'canplay #earnings': function(){
    earnings.addEventListener('timeupdate', function(){
      if(earnings.currentTime >= 0 && earnings.currentTime <= 1) {
        Meteor.call('insertStarterEmailOne');
        Meteor.call('insertStarterEmailTwo');
      }
    }, false);
    
    earnings.addEventListener('timeupdate', function(){
      if(earnings.currentTime >= 90 && earnings.currentTime <= 91) {
        Meteor.call('insertStarterEmailThree');
        /*for(i = 0; i < 1; i++) {
          Notifications.addNotification('You have 1 new email!');
        }*/
      }
    }, false);
    
    earnings.addEventListener('timeupdate', function(){
      if(earnings.currentTime >= 150 && earnings.currentTime <= 151) {
        Meteor.call('insertNewEmailOne');

      }
    }, false);
    
    earnings.addEventListener('timeupdate', function(){
      if(earnings.currentTime >= 210 && earnings.currentTime <= 211) {
        Meteor.call('insertNewEmailTwo');
      }
    }, false);
    
    earnings.addEventListener('timeupdate', function(){
      if(earnings.currentTime >= 270 && earnings.currentTime <= 271) {
        Meteor.call('insertNewEmailThree');
      }
    }, false);
    
    earnings.addEventListener('timeupdate', function(){
      if(earnings.currentTime >= 330 && earnings.currentTime <= 331) {
        Meteor.call('insertNewEmailFour');
      }
    }, false);
    
  },
  
  /*'ended #earnings': function(tmpl) {
    var proceed = tmpl.find("#proceed");
    proceed.show();
  }*/
});

Template.recording.audioHasEnded = function() {
  return Session.get("hasEnded");
};




