Template.practiceIndex.helpers({
  arrayPractice: function() {
    return CollPractice.find({},
          {
          	sort: {priority: 1}
          });
  }
});