Template.signupForm.events({
  'submit #signup-form' : function(e, tmpl) {
    e.preventDefault();
    
    var username = tmpl.find("#signup-username").value;
    var password = tmpl.find("#signup-username").value;
    
    //if(!username || !password)
    //alert("Please fill out all fields!");
    //return false;
     
    Accounts.createUser({
      username: username,
      password: password,
      
    }, function(err) {
      if(err) {
        console.log(err);
      } else {
        console.log(Meteor.users.find().fetch());
        Router.go('instructions');
      }
    });
  }
});

