PracticeDetailController = RouteController.extend({
  waitOn: function() {
    var id = this.params._id;
    Meteor.subscribe('practiceDetail', id);
  },
  data: function() {
    var id = this.params._id;
    var arrayPractice = CollPractice.findOne({_id: id});
    if(arrayPractice)
      App.track('Practice View', {subject: arrayPractice.subject});
    return arrayPractice;
  },
  action: function() {
    this.render();
  }
})