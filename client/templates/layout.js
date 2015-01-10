Template.layout.events({
    "click .photo-link": function () {
      MeteorCamera.getPicture(function (error, data) {
        // we have a picture
        if (! error) {
          onSuccess(data);
        }
      });
    }
  });

  Template.layout.helpers({
    onPage: function (pageName) {
      return Router.current().route.name === pageName;
    }
  });
