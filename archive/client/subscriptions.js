// TODO: Figure out how to get the user geolocation within the subscriptions
// So that we can subscribe to nearby stories
console.log("[subscriptions.js] Geolocation: " + Geolocation.latLng());

// check if user geolocation available
if (Geolocation.latLng()) {
    // Get the latitude/longitude geolocation object
    var latLng = Geolocation.latLng();

    // Create coordinate array for spatial query
    // must be longitude, latitude
    var coordinates = [latLng.lng, latLng.lat];

    // set the min/max distance values in meters
    var minDistance = 0;
    var maxDistance = 10000;

    // call the proximity search function
    console.log("Proximity subscription.");
    Meteor.subscribe('nearbyStories', coordinates, minDistance, maxDistance);
} else {
//    console.log("Recency subscription.");
    Meteor.subscribe('newestStories');
}
