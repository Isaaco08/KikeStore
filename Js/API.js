function iniciarMap(){
  var coord = {lat:10.0128323 ,lng: -84.1970365};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 20,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
}