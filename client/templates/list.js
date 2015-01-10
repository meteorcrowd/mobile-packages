  Template.list.helpers({
    stories: function () {
      return Stories.find({}, {sort: {"createdAt": -1}});
    }
  });
