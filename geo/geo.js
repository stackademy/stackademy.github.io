function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(50,16),
    zoom: 9,
    mapTypeId: google.maps.mapTypeId.TERRAIN
  };

  var styleArray = [
    {
      featureType: "all",
      stylers: [
        { saturation: -80 }
      ]
    }, {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#00ffee" },
        { saturation: 50 }
        ]
      }
  ];
  
  map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

  map.setOptions({styles: styleArray});

  setToCurrentPosition();
}

function setToCurrentPosition() {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      currentLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
      map.setCenter(currentLocation);
      console.log(currentLocation);
    }, null);
  }
}

button = document.getElementById("submit");
button.addEventListener('click', initialize, setToCurrentPosition, false);