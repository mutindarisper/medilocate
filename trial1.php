<?php
/// library downloaded from here https://github.com/phayes/geoPHP
include_once('../geoPHP/geoPHP.inc');

// function for calling wkb_to_json processor
function wkb_to_json($wkb) {
    $geom = geoPHP::load($wkb,'wkb');
    return $geom->out('json');
}

// checking if databasestring is UTF8 
$conn = new PDO('mysql:host=localhost;dbname=web_gis;charset=utf8','neven','gis',array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));

// using  AsBinary on geometry field
// Converts a value in internal geometry format to its WKB representation and returns the binary result
$sql = 'SELECT *, AsBinary(geometry) AS wkb FROM wkt_line';

$rs = $conn->query($sql);
if (!$rs) {
    echo 'An SQL error occured.\n';
	  exit;
}

$geojson = array(
   'type'      => 'FeatureCollection',
   'features'  => array()
);

while ($row = $rs->fetch(PDO::FETCH_ASSOC)) {
    $properties = $row;

    unset($properties['wkb']);
    unset($properties['geometry']);
    $feature = array(
         'type' => 'Feature',//outer feature
         'geometry' => json_decode(wkb_to_json($row['wkb'])),
         'properties' => $properties
    );

    array_push($geojson['features'], $feature);
}

header('Content-type: application/json');
echo json_encode($geojson, JSON_NUMERIC_CHECK);
$conn = NULL;
?>