Template.messagesItem.events({
  'click .list-group-item': function(e, tmpl) {
    Messages.update({_id: this._id}, {
      $set: {"has_read": true}
    });
  }
});

Template.messagesItem.helpers({
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