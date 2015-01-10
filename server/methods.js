Meteor.methods({
  geocode_reverse: function(latlng) {
      console.log('geocode_reverse');
    try {
    var geo = new GeoCoder({
      geocoderProvider: "openstreetmap",
      httpAdapter: "http"
    });
      var result = geo.reverse(latlng.lat, latlng.lng);
        console.log(result[0]);
      return result;
    }
    catch (e){return "sea";}

  }
});
