function ZoomControl(controlDiv, map) {
  
    // Creating divs & styles for custom zoom control
    // controlDiv.style.padding = '5px';
  
    // Set CSS for the control wrapper
    var controlWrapper = document.createElement('div');
    // $('#zoom').parent().addClass('zoomp');
    controlWrapper.style.backgroundColor = '#222';
    controlWrapper.style.borderStyle = 'solid';
    controlWrapper.style.borderColor = 'gray';
    controlWrapper.style.borderWidth = '1px';
    controlWrapper.style.cursor = 'pointer';
    controlWrapper.style.textAlign = 'center';
    controlWrapper.style.width = '32px'; 
    controlWrapper.style.height = '64px';
    controlDiv.appendChild(controlWrapper);
    
    // Set CSS for the zoomIn
    var zoomInButton = document.createElement('div');
    zoomInButton.style.width = '32px'; 
    zoomInButton.style.height = '32px';
    /* Change this to be the .png image you want to use */
    zoomInButton.style.backgroundImage = 'url("/assets/images/zoomin.png")';
    controlWrapper.appendChild(zoomInButton);
      
    // Set CSS for the zoomOut
    var zoomOutButton = document.createElement('div');
    zoomOutButton.style.width = '32px'; 
    zoomOutButton.style.height = '32px';
    /* Change this to be the .png image you want to use */
    zoomOutButton.style.backgroundImage = 'url("/assets/images/zoomout.png")';
    controlWrapper.appendChild(zoomOutButton);
  
    // Setup the click event listener - zoomIn
    google.maps.event.addDomListener(zoomInButton, 'click', function() {
      map.setZoom(map.getZoom() + 1);
    });
      
    // Setup the click event listener - zoomOut
    google.maps.event.addDomListener(zoomOutButton, 'click', function() {
      map.setZoom(map.getZoom() - 1);
    });  
    
}

$(document).ready(function(){
    var styles = [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ];
    
    var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
    var mapOptions = {
        zoom: 15,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        zoomControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        draggable: true,
        center: new google.maps.LatLng(lat, lang),
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        }
    };

    // if(isMobile()){
    //   var mapOptions = {
    //     zoom: 16,
    //     scrollwheel: false,
    //     navigationControl: false,
    //     mapTypeControl: false,
    //     scaleControl: false,
    //     draggable: true,
    //     center: new google.maps.LatLng(22.616809, 120.2929903),
    //     mapTypeControlOptions: {
    //       mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    //     }
    //   };
    // }else{
      
    // }
    
    var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    
    var image = '/assets/images/pin.png';
    var marker = new google.maps.Marker({
        map: map,
        icon: image,
        // Define the place with a location, and a query string.
        place: {
            location: {lat: lat, lng: lang},
            query: 'Google, Taiwan'
        },
            // Attributions help users find your site again.
            attribution: {
            source: 'Google Maps JavaScript API',
            webUrl: 'https://developers.google.com/maps/'
        }
    });
    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');
    
    // navigator.geolocation.getCurrentPosition(showPosition);
        
    // var xxx=0,yyy=0;
    // function showPosition(position) {
    //     console.log(position.coords.latitude);
    //     console.log(position.coords.longitude);
    //     xxx=position.coords.latitude;
    //     yyy=position.coords.longitude
    //     var marker3 = new google.maps.Marker({
    //         map: map,
    //         icon: image,
    //         title: 'Uluru (Ayers Rock)',
    //         // Define the place with a location, and a query string.
    //         place: {
    //             location: {lat: xxx, lng: yyy},
    //             query: 'Taiwan',
    //         },
    //         // Attributions help users find your site again.
    //         attribution: {
    //             source: 'Google Maps JavaScript API',
    //             webUrl: 'https://developers.google.com/maps/'
    //         }
    //     });
    // }

        
    var zoomControlDiv = document.createElement('div');
    zoomControlDiv.setAttribute("id", "zoom");
    var zoomControl = new ZoomControl(zoomControlDiv, map);

    zoomControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(zoomControlDiv);

})

