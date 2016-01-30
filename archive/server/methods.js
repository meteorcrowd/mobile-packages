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

        // Attributes for the spatial index

        // parse values to floats
        var longitude = parseFloat(story.location.longitude);
        var latitude = parseFloat(story.location.latitude);

        // Add Geo JSON to location
        story.location.index = {
            "type": "Point",
            "coordinates": [longitude, latitude]
        };

        // Save the story into the stories collection
        Stories.insert( story ) ;
    },
    'getNearbyStories': function (location) {
        /*
    * Takes an array of coordinates in longitude/latitude format
    * min/max distance expressed in meters
    * returns nearest stories
    */
        var parameters;
        parameters = {
            geometry: {
                type: "Point" ,
                // array of longitude/latitude
                coordinates: coordinates
            },
            $maxDistance: 10000,
            $minDistance: 0
        }
        return  Stories.find({ loc : {$near: parameters } });
    }
});
