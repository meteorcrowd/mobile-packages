Meteor.methods({
    geocodeReverse: function(latlng) {
        // This funciton returns details about a location
        // such as city, country, street, etc.
        // Accepts latitude and longitude as input
        try {
            // Create a GeoCoder
            var geo = new GeoCoder({
                geocoderProvider: "openstreetmap",
                httpAdapter: "http"
            });

            // Get the reverse geolocation, based on latitude and longitude
            var result = geo.reverse(latlng.lat, latlng.lng);

            // Return the geocoded details
            return result[0];
        }
        catch (e){return "sea";}
    },
    addStory: function( story ) {
        // add reverse geolocation to story. E.g. city, country, etc.
        story.location = Meteor.call( "geocodeReverse", story.location );

        // Save the story into the stories collection
        Stories.insert( story ) ;
    }
});
