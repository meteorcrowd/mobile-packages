Meteor.publish('nearbyStories', function(coordinates, minDistance, maxDistance) {
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
        $maxDistance: maxDistance,
        $minDistance: minDistance
    }
    return  Stories.find({ loc : {$near: parameters } });
});

Meteor.publish('newestStories', function () {
    // Get the most recent stories.
    return Stories.find({}, {sort: {"createdAt": -1}});
});
