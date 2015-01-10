Template.layout.events({
    "click .story-link": function (event) {
        event.preventDefault();

        Router.go('addStory');
    }
});

/*Template.layout.helpers({
    onPage: function (pageName) {
        return Router.current().route.name === pageName;
    }
});*/
