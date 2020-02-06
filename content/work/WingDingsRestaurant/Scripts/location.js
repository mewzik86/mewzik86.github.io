"use strict";
// global variables


function loadMap() {
    var Lat = "43.786784999999995";
    var Lng = "-79.2338259";
    var mapOptions = {
        center: new google.maps.LatLng(Lat, Lng),
        zoom: 11
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    console.log(Lat);
    console.log(Lng);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(Lat, Lng),
        map: map
    });
}

function setUpPage() {
    if (typeof google !== 'object')
    var script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.src = "https://maps.googleapis.com/maps/api/js?key=*&callback=loadMap";
    document.body.appendChild(script);
}
// run setUpPage() function when page finishes loading
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
}
