function initMap() {
	var myMapDiv = document.getElementById('map');
    var map = new google.maps.Map(myMapDiv, {
      center: {lat: 48.9168, lng: 24.7329},
      zoom: 16
    });
    var marker;
    marker = new google.maps.Marker({
	    map: map,
	    draggable: true,
	    animation: google.maps.Animation.DROP,
	    position: {lat: 48.9168, lng: 24.7329}
	});
	/*google.maps.event.addListener(marker,'click',function() {
	map.setZoom(18);
	map.setCenter(marker.getPosition());
	});
	google.maps.event.addListener(map,'center_changed',function() {
	 window.setTimeout(function() {
	map.panTo(marker.getPosition());
	 },3000);
	});*/
	var infowindow = new google.maps.InfoWindow({
		content:"Василіянський Монастир Царя Христа"
	});
	google.maps.event.addListener(marker, 'click', function() {
		infowindow.open(map,marker);
	});
	
};