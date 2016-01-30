Template.addStory.events({
    'click #add_story': function () {
        // Fetch current location
        var latLng = Geolocation.latLng();

        // Fetch text as a var from textaread
        var text = $('#story').val();

        // Create story object
        var story = {
            story: text,
            createdAt: new Date(),
            location: {
                // coordinates to pass into the geolocation function
                lat: latLng.lat,
                lng: latLng.lng
            }
        };

        // Add story to collection
        Meteor.call("addStory", story);

        // Clear the textarea
        $('#story').val("");

        // Route to the stories list
        Router.go('list');
    }
});
