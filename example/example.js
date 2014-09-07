if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    },
    source: function () {
      return  "# meteor-unimark\n" +
              "\n" +
              "Universal text document markup syntax.\n" +
              "\n" +
              "- this should be\n" +
              "- rendered\n" +
              "- as a bullet list\n";
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
