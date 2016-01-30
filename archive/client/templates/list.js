Template.list.helpers({
    stories: function () {
        // TODO: get a list of stories sorted by nearest location
        //return Meteor.call("getNearbyStories", coordinates);

        // Return a list of stories
        return Stories.find();
    },
    moment: function(date) {
        return moment(date).fromNow();
    }
});
