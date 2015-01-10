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
                lat: latLng.lat,
                lng: latLng.lng,
                // This following duplication of data is necessary
                // to keep the semantic lat, lng values
                // as separate attributes
                // while enabling the Mongo spatial index
                coordinatesIndex: [latLng.lng, latLng.lat]
            }
        };

        // Add story to collection
        Meteor.call("addStory", story);

        // Clear the textarea
        $('#story').val("");
    }
});
