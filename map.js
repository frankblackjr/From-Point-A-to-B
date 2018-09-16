function initMap() {
  /*Below is code to produce a map above my apartment.
    1:myCenter gives the Google Maps API my Latitude and Longitude
    2:myCanvas is the Element that I am going to display the map in.
    3:mapOptions are the default options that I want when my map loads.
    4:map is the line that uses the previous lines of code to display the data on a map.
    5:marker is an object that displays a point that define
  */
    var myCenter = new google.maps.LatLng(35.449359, -80.996762);
    var mapCanvas = document.getElementById("myMap");
    var mapOptions = {center: myCenter, zoom: 20,
    mapTypeId: google.maps.MapTypeId.HYBRID};
    /*MapTypeId: Values available
    ROADMAP, SATELLITE, HYBRID, TERRAIN*/
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var marker = new google.maps.Marker({position: myCenter});
    marker.setMap(map);

    var myCenter2 = new google.maps.LatLng(37.356488, -80.938093);
    var mapCanvas2 = document.getElementById("myMap2");
    var mapOptions2 = {center: myCenter2, zoom: 20,
    mapTypeId: google.maps.MapTypeId.HYBRID};
    var map2 = new google.maps.Map(mapCanvas2, mapOptions2);
    var marker2 = new google.maps.Marker({position: myCenter2});
    marker2.setMap(map2);
  }
