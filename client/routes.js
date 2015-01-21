Router.configure({
    layoutTemplate: "layout",
    waitOn: Geolocation.currentLocation()
});

Router.map(function() {
    this.route('list', {
        name: 'storyList',
        path: '/'
    })
});

Router.route('/add-story/', {
    name: 'addStory'
});
