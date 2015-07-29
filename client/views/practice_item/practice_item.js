Template.practiceItem.events({
  'click .list-group-item': function(e, tmpl) {
    console.log("practiceItem.updater");
    CollPractice.update({_id: this._id}, {
      $set: {"has_read": true}
    });
    console.log("practiceItem.complete?");
  }
});

Template.practiceItem.helpers({
  hasReadClass: function() {
    return this.has_read? 'read': '';
  },
  
  hasBeenReadIcon: function() {
    if(this.has_read) {
      return "glyphicon glyphicon-check";
    } else {
      return "glyphicon glyphicon-unchecked";
    }
  }
});