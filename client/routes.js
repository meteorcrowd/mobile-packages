Router.configure({
    layoutTemplate: "layout"
});

Router.map(function() {
    this.route('list', {
        path: '/'
    })
});

Router.route('/add-story/', {
    name: 'addStory'
});
