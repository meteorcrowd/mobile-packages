  var onSuccess = function (imageData) {
    var latLng = Geolocation.latLng();

    if (! latLng) {
      return;
    }

    Photos.insert({
      image: imageData,
      createdAt: new Date(),
      marker: {
        lat: latLng.lat,
        lng: latLng.lng,
        infoWindowContent: "<img width='100' src='" + imageData + "' />"
      }
    });

    Router.go("/list");
  };
