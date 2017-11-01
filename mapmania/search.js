function initialize() {
      var mapOptions = {
        center: new google.maps.LatLng(50,16),
        zoom: 9,
        mapTypeId: google.maps.MapTypeId.TERRAIN
      };

      var styleArray = [
        {
          featureType: "all",
          stylers: [
            { saturation: -80 }
          ]
        },{
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [
            { hue: "#00ffee" },
            { saturation: 50 }
          ]
        },{
          featureType: "poi.business",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ];

      image = 'hamster.gif';
      
      map = new google.maps.Map(document.getElementById("map-canvas"),
          mapOptions);

      map.setOptions({styles: styleArray});

      getUserInput();

    }

function getUserInput() {
  input = document.getElementById("input").value;
  geocoder = new google.maps.Geocoder();
  // How does this nesting work???
  geocoder.geocode( { address: input }, function(results, status){
    center = results[0].geometry.location;
    map.setCenter(center);
    add_marker(center, input)
  })
}

function setToCurrentPosition() {
  if(navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
    map.setCenter(initialLocation);
  }, null);
}
}


function add_marker(center, title) {
  new google.maps.Marker({
    map: map, 
    position: center,
    title: title,
    icon: image
  })
}

function connect(){

}


button = document.getElementById("submit");
button.addEventListener('click', initialize, false);

button = document.getElementById("sethome");
button.addEventListener('click', setToCurrentPosition, false)

button = document.getElementById("home");
button.addEventListener('click', setToCurrentPosition, false)

