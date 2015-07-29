Router.configure({
  layoutTemplate: "appLayout",
  routeControllerNameConverter: "upperCamelCase"
});

Router.route('/', function() {
  this.render('signupForm');
}, {
  name: 'begin'
});

Router.route('/instructions', function() {
  this.render('instructions');
}, {
  name: 'instructions'
});

Router.route('/demographics', function() {
  this.render('demographics');
}, {
  name: 'demographics'
});

Router.route('/practice_answers', function() {
	this.render('practiceAnswers');
}, {
	name: 'practiceAnswers'
});

Router.route('/practice_detail', function() {
	this.render('practiceDetail');
}, {
	name: 'practiceDetail'
});

Router.route('/practice_index', function() {
	this.render('practiceIndex');
}, {
	name: 'practiceIndex',
	layoutTemplate: 'practice_layout'
});

Router.route('/practice_item', function() {
	this.render('practiceItem');
}, {
	name: 'practiceItem'
});

Router.route('/practice_questions_index', function() {
	this.render('practiceQuestionsIndex');
}, {
	name: 'practiceQuestionsIndex'
});

Router.route('/practice_recording', function() {
	this.render('practiceRecording');
}, {
	name: 'practiceRecording'
});
