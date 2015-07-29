Template.demographics.events({
  'submit #user-demographics': function(e, tmpl) {
    e.preventDefault();
    
    var age = tmpl.find('#user-age').value;
    var work = tmpl.find('#user-work').value;
    var male = tmpl.find('#male');
    var sex = tmpl.find('input:radio[name=gender]:checked').value;
    
    var id = Meteor.userId();
    
    Meteor.users.update(id, {
      $set: {
        profile: {
          age: age,
          work: work,
          sex: sex
        }
      }
    });
  }
});