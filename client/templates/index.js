_.extend(App, {
  track: function(key, meta) {
    meta = meta || {};
    
    Deps.autorun(function(c) {
      if(!Meteor.loggingIn()){
        
        var user = Deps.nonreactive(function() {
      return Meteor.user(); 
    });
        
        if(user && user.username.length > 0)
          username = user.username;
        else
          username = 'anonymous';

        _.extend(meta, {
          username: username,
          path: location.pathname
          });
        
        mixpanel.track(key, meta);
        c.stop();
      }
    });
  }  
});
    
    
    

Deps.autorun(function() {
  var path = Iron.Location.get();
  App.track('Page Views');
});