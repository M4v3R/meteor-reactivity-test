if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

  Template._testTemplate.onRendered(function() {
    let self = this;
    console.log("rendered");
    Tracker.autorun(function() {
      console.log('check reactive ', Template.instance().data.check);
    });
  });

  Template._testTemplate.helpers({
    testingVal() {
      console.log(1);
      return 1;
    },

    anotherTest() {
      console.log(2);
      return 2;
    }
  });
}
