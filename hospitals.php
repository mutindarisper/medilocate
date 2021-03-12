<?php

    $db = new PDO("mysql:host=localhost;dbname=major_hospitals", "root", "");

    $sql = "SELECT * FROM hospital";
    $rs = $db->query($sql);

    if (!$rs) {

        echo "An SQL error occured.\n";

        exit;

    }

    $rows = array();

    while($r = $rs->fetch(PDO::FETCH_ASSOC)) {

        $rows[] = $r;

    }

    print json_encode($rows);

    $db = NULL;

?>


<!DOCTYPE html>

<html>

​

<head>

    <title>My Leaflet.js Map</title>

    <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.css" />

    <script src="http://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.11.3.min.js"></script>

    <script src="http://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.3/leaflet.js">

    </script>

    <style>

        html,

        body,

        #map {

            height: 100%;

        }

    </style>

​

    <script type="text/javascript">

        function init() {

            var map = L.map('map').setView([ -1.286144, 36.8181248], 18);

​

            // OSM Mapnik

            var osmLink = "<a href='http://www.openstreetmap.org'>Open StreetMap</a>";

            L.tileLayer(

                'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {

                    attribution: '&copy; ' + osmLink,

                    maxZoom: 18

                }).addTo(map);

           

            showHospitals(map);

        }

       

        function showHospitals(map) {

​

        var icon = L.icon({

            iconUrl: 'markers/marker.png',

            iconSize: [27,27]

        });

        $.getJSON("hospitalsArray.php", function(data) {

            for (var i = 0; i < data.length; i++) {

                var location = new L.LatLng(data[i].LATITUDE, data[i].LONGITUDE);

                var name = data[i].NAME;

                var province = data[i].COUNTY;

                
            

                var contact = data[i].CONTACT;

​

                var marker = new L.Marker(location, {

                    icon: icon,

                    title: name

                });

                var content = "<h2>" + name + "</h2>"

                    + "<p>" + Province + "</br>" 

                    + Contact + "</p>"

                    + "<p>" + location + "</b></p>";

​

                marker.bindPopup(content, {

                    maxWidth: '200'

                });

                marker.addTo(map);

            }

        });

    }

           

            // Retrieve and display hospital data

           

       

    </script>

</head>

​

<body onload="init()">

    <div id="map"></div>

</body>

​

</html>