Meteor.publish('nearbyStories', function(location, minDistance, maxDistance) {
    var parameters;
    parameters = {
        geometry: {
            type: "Point" ,
            coordinates: location.coordinates
        },
        $maxDistance: maxDistance,
        $minDistance: minDistance
    }
    stories = Stories.find({ loc : {$near: parameters } });
});
