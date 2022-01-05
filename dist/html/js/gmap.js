var mapLocation = new google.maps.LatLng(6.625844200747361, 3.3075370824686314); //change coordinates here 
var marker;
var map;

function initialize() {
    var mapOptions = {
        zoom: 8, // Change zoom here
        center: mapLocation,
        scrollwheel: false,
        styles: [
            {"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},
            {"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},
            {"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},
            {"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},
            {"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},
            {"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
            {"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},
            {"featureType":"water","elementType":"all","stylers":[{"color":"#dbdbdb"},{"visibility":"on"}]}]
    };
    
    map = new google.maps.Map(document.getElementById('map'),
    mapOptions);
    
    
    //change address details here
    var contentString = '<div class="map-info">' 
    + '<div class="map-title">' 
    + '<h3>Mario.</h3></div>' 
    + '<p class="map-address"><div class="map-address-row"><i class="fa fa-map-marker"></i><span class="text"><strong>54, Oyewole Street, Mulero, Iyana Ipaja</strong><br>Lagos</span></div><div class="map-address-row"><i class="fa fa-phone"></i><span class="text">(+234) 07059756149</span></div><div class="map-address-row"><span class="map-email"><i class="fa fa-envelope"></i><span class="text">admissions@kingseedhigh.ng</span></span></p>' 
    + '<p class="gmap-open"><a href="https://www.google.com/maps/place/Kingseed+High+School/@6.6256204,3.3053484,17z/data=!3m1!4b1!4m5!3m4!1s0x103b911997ad0569:0xecac964a0bb5bf5d!8m2!3d6.6256204!4d3.3075371" target="_blank">Open on Google Maps</a></p></div>';
    
    
    var infowindow = new google.maps.InfoWindow({
        content: contentString,
    });
    

    marker = new google.maps.Marker({
        map: map,
        draggable: true,
        title: 'King Seed High School', //change title here
        animation: google.maps.Animation.DROP,
        position: mapLocation
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
    });




}

if ($('#map').length) {
    google.maps.event.addDomListener(window, 'load', initialize);
}

