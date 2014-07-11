if (Meteor.isClient) {
  Template.list.events({
    'click #add' : function(event, template){
      event.preventDefault();
      ListItems.insert({
        name: $('#new-item').val(),
        quantity: $('#quantity').val()
      });
    }
  });

  Template.list.helpers({
    listItems: function() {
      return ListItems.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
