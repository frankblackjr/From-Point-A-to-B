function initMap() {
  /*Below is code to produce a map above my apartment.
    1:myCenter gives the Google Maps API my Latitude and Longitude
    2:myCanvas is the Element that I am going to display the map in.
    3:mapOptions are the default options that I want when my map loads.
      Note:MapTypeId Values available
      ROADMAP, SATELLITE, HYBRID, TERRAIN
    4:map is the line that uses the previous lines of code to display the data on a map.
    5:marker is an object that displays a point that define
  */
    var denver = new google.maps.LatLng(35.449359, -80.996762);
    var mapCanvas = document.getElementById("myMap");
    var mapOptions = {center: denver, zoom: 20,
    mapTypeId: google.maps.MapTypeId.HYBRID};
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position: denver});
    marker.setMap(map);

    var princeton = new google.maps.LatLng(37.356488, -80.938093);
    var mapCanvas2 = document.getElementById("myMap2");
    var mapOptions2 = {center: princeton, zoom: 20,
    mapTypeId: google.maps.MapTypeId.HYBRID};
    var map2 = new google.maps.Map(mapCanvas2, mapOptions2);
    var marker2 = new google.maps.Marker({position: princeton});
    marker2.setMap(map2);

    var iga = new google.maps.LatLng(35.323333, -81.174591);
    var mapCanvas3 = document.getElementById('myMap3');
    var mapOptions3 = {center:iga, zoom:20,
    mapTypeId: google.maps.MapTypeId.HYBRID};
    var map3 = new google.maps.Map(mapCanvas3, mapOptions3);
    var marker3 = new google.maps.Marker({position:iga, animation:google.maps.Animation.BOUNCE});
    marker3.setMap(map3);

    var myCenter4 = new google.maps.LatLng(35.323333, -81.174591);
    var mapCanvas4 = document.getElementById('myMap4');
    var mapOptions4 = {center:myCenter4, zoom:7,
    mapTypeId: google.maps.MapTypeId.HYBRID};
    var map4 = new google.maps.Map(mapCanvas4, mapOptions4);
    var drivePath = new google.maps.Polyline({
      path: [princeton, denver, iga],
      strokeColor: '#0000FF',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    drivePath.setMap(map4);

  }
