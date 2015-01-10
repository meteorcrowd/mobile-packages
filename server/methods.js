Meteor.methods({
    geocodeReverse: function(latlng) {
        console.log('geocode_reverse');
        try {
            var geo = new GeoCoder({
                geocoderProvider: "openstreetmap",
                httpAdapter: "http"
            });
            var result = geo.reverse(latlng.lat, latlng.lng);
            console.log("Geocoding result: ", result);
            return result[0];
        }
        catch (e){return "sea";}
    },
    addStory: function( story ) {

        story.location = Meteor.call( "geocodeReverse", story.location );
        console.log("Story city: ", story.location.city);
        Stories.insert( story) ;
    }
});
