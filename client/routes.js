Router.configure({
    layoutTemplate: "layout"
});

Router.map(function() {
    this.route('list', {
        path: '/'
    })
});

//  this.route("mapWithPhoto", {
//    template: "map",
//    path: 'map/:_id',
//    data: function () {
//      Session.set("currentPhoto", this.params._id);
//    }
//  });
//  this.route('camera-page');
//  this.route("list");
//});

Router.route('/add-story/', {
    name: 'addStory'
});
