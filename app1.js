(function() {
 
	 var hospitalMap = new L.LayerGroup(); //hospitals layer that combines your hospital  markers into one layer you can add or remove from the map at once.
	 
    var osmLink = '<a href="http://openstreetmap.org" target="_blank">OpenStreetMap</a>',
        thunLink = '<a href="http://www.thunderforest.com/" target="_blank">Thunderforest</a>';
    

    //creating base layers and adding the default ones to the map
    var osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        thunTrans = 'http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=66c492b59e4a41fe9b461bcd12f5e9b6',
        osmAttrib = '&copy; ' + osmLink + ' & '+thunLink +' Contributors',
        landUrl = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        thunAttrib = 'Tiles &copy; Esri -; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, & The GIS User Community';
    var osmMap = L.tileLayer(osmUrl, {attribution: osmAttrib}),
        landMap = L.tileLayer(landUrl, {attribution: thunAttrib})
        transMap = L.tileLayer(thunTrans, {attribution: osmAttrib})

	var zoomLevel = 13,
        mapCenter = [-1.3, 36.8];

	var options = {
        center: mapCenter,
        zoom: zoomLevel,
        layers: [transMap],//default layer to be added once the map loads
    };
    var map = L.map('map', options);
   
   	var baseLayers = {
           "Transport": transMap,
            "Basic Map": osmMap,
             "Satellite": landMap
        };

        
        L.control.layers(baseLayers).addTo(map); //create a Layers Control and add it to the map


         L.control.scale().addTo(map);//reate a scale Control and add it to the map

        var searchIcon = L.icon({
		    iconUrl: 'img/search_marker.png',
		    iconSize:     [40, 40], // width and height of the image in pixels
		    shadowSize:   [40, 20], // width, height of optional shadow image
		    iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
		    shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
		    popupAnchor:  [0, -30] // point from which the popup should open relative to the iconAnchor
		  })
		  
		  var pinIcon = L.icon({
		    iconUrl: 'img/blue-pin.png',
		    iconSize:     [50, 50], // width and height of the image in pixels
		    shadowSize:   [40, 20], // width, height of optional shadow image
		    iconAnchor:   [25, 50], // point of the icon which will correspond to marker's location
		    shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
		    popupAnchor:  [0, -30], // point from which the popup should open relative to the iconAnchor
			tooltipAnchor: [0, -40],
		  })



      


        map.addControl( new L.Control.Search({ //A Leaflet control that searches markers/features location by custom property
			url: 'https://nominatim.openstreetmap.org/search?format=json&q={s}',
			jsonpParam: 'json_callback', //jsonp param name for search by jsonp service, ex: "callback"
			propertyName: 'display_name', //property in marker.options or feature.properties for vector layer through filter elements in layer,
			propertyLoc: ['lat','lon'], //field for remapping location, using array: ['latname','lonname']
			marker: L.marker([0,0], { icon: searchIcon } ),
			autoCollapse: true, //doest not collapse search control after submit
			autoType: false, //does not complete input with first suggested result and select this filled-in text
			minLength: 2 //minimal text length for autocomplete
		}) );

         
    
    var sqlQuery = 'SELECT * FROM hospital';
    
    var hospitals,
        $body = $('body'),
        $locate = $('#locate'),
        $findNearest = $('#find-nearest'),
        $status = $('#status');


                  var myIcon = new L.Icon({
                    iconUrl: 'img/marker.png', 
                    iconSize:     [25, 30], // width and height of the image in pixels
                    shadowSize:   [35, 20], // width, height of optional shadow image
                    iconAnchor:   [12.5, 30], // point of the icon which will correspond to marker's location
                    shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
                    popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
                  });
                  var gynIcon = new L.Icon({
                        iconUrl: 'img/gyn.png', 
                        iconSize:     [25, 30], // width and height of the image in pixels
                        shadowSize:   [35, 20], // width, height of optional shadow image
                        iconAnchor:   [12.5, 30], // point of the icon which will correspond to marker's location
                        shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
                        popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
                  });
                  var dentIcon = new L.Icon({
                        iconUrl: 'img/dental.png', 
                        iconSize:     [25, 30], // width and height of the image in pixels
                        shadowSize:   [35, 20], // width, height of optional shadow image
                        iconAnchor:   [12.5, 30], // point of the icon which will correspond to marker's location
                        shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
                        popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
                  });
               
               var scanIcon = new L.Icon({
                        iconUrl: 'img/ultra.png', 
                        iconSize:     [25, 30], // width and height of the image in pixels
                        shadowSize:   [35, 20], // width, height of optional shadow image
                        iconAnchor:   [12.5, 30], // point of the icon which will correspond to marker's location
                        shadowAnchor: [12, 6],  // anchor point of the shadow. should be offset
                        popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor
                  });

                
    // replace Leaflet's default blue marker with a custom icon
 function createCustomIcon (feature, latlng) {
            switch (feature.properties.CATEGORY){
                case 'GYNAECOLOGIST':

                    return L.marker(latlng, { icon: myIcon });
                    break;

               
               
                case 'GENERAL':
                    
                     return L.marker(latlng, {icon: gynIcon});
                     break;
                
                 case 'DENTAL':
                    
                    return L.marker(latlng, {icon: dentIcon});
                    break;
                
                
                case 'ULTRASOUND':
                    
    
                     return L.marker(latlng, {icon: scanIcon});
        

               } 
            }
// create an options object that specifies which function will be called on each feature
var myLayerOptions = {
  style: function colors(feature){
            switch(feature.properties.CATEGORY){
                case 'GENERAL':
                    return{
                        color: 'orange',
                        
                    };
                break;
                case 'GYNAECOLOGIST':
                    return{
                        color: 'purple',
                        
                    };
                break;

            }
        },
   onEachFeature: function (feature, layer) {
    layer.bindPopup('<strong>'+feature.properties.NAME+'</strong><p><strong>Type: </strong>'+feature.properties.TYPE+'</p><strong>Facility: </strong>'+feature.properties.FACILITY+'</p></p><strong>Emergency Contact: </strong><a href="tel:'+feature.properties.CONTACT+'" target="_blank" style="text-decoration:none; color:#e04d21">CALL</a></p></p><strong>Navigate: </strong><a href="https://maps.google.com/?q='+feature.properties.LATITUDE+','+feature.properties.LONGITUDE+'" target="_blank" style="text-decoration:none; color:#e04d21">GO</a></p>');
  }
}

   
    $.getJSON('hospitals_geojson.php', function(data) {


		
		
  
        //$('#loader').fadeOut();
        $body.addClass('loaded');
        
        hospitals = L.geoJson(data, 
            {style: function colors(feature){
            switch(feature.properties.CATEGORY){
                case 'GENERAL':
                    return{
                        color: 'orange',
                        
                    };
                break;
                case 'GYNAECOLOGIST':
                    return{
                        color: 'purple',
                        
                    };
                break;

            }
        },}).addTo(map);

        $locate.fadeIn().on('click', function(e) {
            
            $status.html('Droping pin at your location...');
            
            if (!navigator.geolocation){ //if the browser is unable to get current location,then give the error message
                alert("<p>Sorry, your browser does not support Geolocation</p>");
                return;
            }
            
            $body.removeClass('loaded');
              
            navigator.geolocation.getCurrentPosition(success, error); //if the browser is able to get current location then drop the pin
            
           $locate.fadeOut();
            
        });   
    });

    function success(position) {
        
        $body.addClass('loaded');
        
        var currentPos = [position.coords.latitude,position.coords.longitude]; //after successfully getting location, show lat and long
        
        map.setView(currentPos, zoomLevel); //set the map at zoom level 13 and the position of the user

        var myLocation = L.marker(currentPos, {draggable: true, icon: pinIcon}) //the pin can be dragged to the user's desired location
                            .addTo(map)
                            .bindTooltip("Drag pin to desired location") //message of the tooltip
                            .openTooltip(); //tooltip remains open and does not dissapear
		
		
		var newPos = [myLocation.getLatLng().lat, myLocation.getLatLng().lng];
		
		myLocation.on('dragend', function (e) {
		newPos = [myLocation.getLatLng().lat, myLocation.getLatLng().lng]; //the dragged position becomes the new position
	
		}); 
        
		
            
        $findNearest.fadeIn()
            .on('click', function(e) {
                
                $findNearest.fadeOut();
                
                $status.html('Finding your nearest hospitals') //message displayed while finding nearest hospitals
            
                queryFeatures(newPos, 3); //displays the three nearest hospitals
            
                myLocation.unbindTooltip();
            
                
        });

    };

    function error() {
        alert("Unable to retrieve your location");
    };
     
    function queryFeatures(currentPos, numResults) {
        
        var distances = [];
        
        hospitals.eachLayer(function(l) {
            
            var distance = L.latLng(currentPos).distanceTo(l.getLatLng())/1000;
            
            distances.push(distance);

        });
        
        distances.sort(function(a, b) {
            return a - b;
        });
        
        
        var hospitalsLayer = L.featureGroup();


        hospitals.eachLayer(function(l) {
            
            var distance = L.latLng(currentPos).distanceTo(l.getLatLng())/1000;
            
            if(distance < distances[numResults]) {
                
                l.bindTooltip(distance.toLocaleString() + ' km from current location.');
                
                L.polyline([currentPos, l.getLatLng()], {
                    color : 'blue',
                    weight : 2,
                    opacity: 1,
                    dashArray : "5, 10"
                }).addTo(hospitalsLayer);
                
            }
        });
        
        map.flyToBounds(hospitalsLayer.getBounds(), {duration : 3, easeLinearity: .1 });
        
        map.on('zoomend', function() {
          
            map.addLayer(hospitalsLayer);
			
        })
      
    }
	
    	var searchControl = new L.Control.Search({
		layer: hospitalsLayer,
		propertyName: 'NAME',
		marker: false,
		moveToLocation: function(latlng, title, map) {
			//map.fitBounds( latlng.layer.getBounds() );
			var zoom = map.getBoundsZoom(latlng.layer.getBounds());
  			map.setView(latlng, zoom); // access the zoom
		}
	});

	searchControl.on('search:locationfound', function(e) {
		
		//console.log('search:locationfound', );

		//map.removeLayer(this._markerSearch)

		e.layer.setStyle({fillColor: '#3f0', color: '#0f0'});
		if(e.layer._popup)
			e.layer.openPopup();

	}).on('search:collapsed', function(e) {

		hospitalsLayer.eachLayer(function(layer) {	//restore feature color
			hospitalsLayer.resetStyle(layer);
		});	
	});
	
	map.addControl( searchControl, {icon: searchIcon} );  //inizialize search control

})();