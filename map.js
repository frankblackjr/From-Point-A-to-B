function initMap() {
    var myCenter = new google.maps.LatLng(35.449359, -80.996762);
    var mapCanvas = document.getElementById("myMap");
    var mapOptions = {center: myCenter, zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP};
    /*
    MapTypeId:
    ROADMAP
    SATELLITE
    HYBRID
    TERRAIN
    */
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position: myCenter});
    marker.setMap(map);
  }
