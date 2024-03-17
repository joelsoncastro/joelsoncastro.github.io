function initMap() {
    var mapContainer = document.getElementById('gm_map_container_sc1');
    var options = {
      center: { lat: 37.7749, lng: -122.4194 }, // Specify the initial map center
      zoom: 12, // Specify the initial zoom level
      disableDefaultUI: true // Disable the default UI controls
    };
    var map = new google.maps.Map(mapContainer, options);
  }
  