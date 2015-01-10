Template.addStory.events({
    'click #add_story': function () {
        console.log("clicked");
        // Fetch current location
        var latLng = Geolocation.latLng();
        console.log(latLng);
        // Fetch text as a var from textaread
        var text = $('#story').val();
        console.log(text);
        // Add story to collection
        Stories.insert({
            story: text,
            createdAt: new Date(),
            location: {
                lat: latLng.lat,
                lng: latLng.lng,
            }
        });
        // Clear the textarea
        $('#story').val("");
    }
});
