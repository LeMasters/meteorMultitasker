Template.instructions.helpers({
  hasAgreed: function() {
    return this.has_agreed ? 'checked' : '';
  }
});

Template.instructions.events({
  'click [name=next]': function(e, tmpl) {
    var hasAgreed = tmpl.find('input');
    if(hasAgreed.checked) {
      Router.go('practiceIndex');
    } else {
      alert("Please check the box to demonstrate that you have read and understand the instructions before proceeding to the survey.");
    }
  }
  //'click [name=has_agreed]': function(e, tmpl) {
    //var hasAgreed = tmpl.find('input').checked;
  //}
})