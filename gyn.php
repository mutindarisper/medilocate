<?php


    /*Just for your server-side code*/
    header('Content-Type: text/html; charset=ISO-8859-1');

# Include required geoPHP library and define wkb_to_json function
include_once('geoPHP/geoPHP.inc');
function wkb_to_json($wkb) {
    $geom = geoPHP::load($wkb,'wkb');
    return $geom->out('json');
}

# Connect to MySQL database
$conn = new PDO("mysql:host=localhost;dbname=major_hospitals", "root", "");

# Build SQL SELECT statement and return the geometry as a WKB element
$sql = 'SELECT * FROM gynacologists';

# Try query or error
$rs = $conn->query($sql);
if (!$rs) {
    echo 'An SQL error occured.\n';
    exit;
}

# Build GeoJSON feature collection array
$geojson = array(
   'type'      => 'FeatureCollection',
   'features'  => array()
);

# Loop through rows to build feature arrays
while ($row = $rs->fetch(PDO::FETCH_ASSOC)) {
    $properties = $row;
    # Remove wkb and geometry fields from properties
    unset($properties['wkb']);
    unset($properties['SHAPE']);
	
	
	
    $feature = array(
         'type' => 'Feature',
         'geometry'=> array(
		 'type' => 'Point',
		 'coordinates' => array(
			$row['LONGITUDE'],
			$row['LATITUDE']
			)
		),
         'properties' => $properties
    );
    # Add feature arrays to feature collection array
    array_push($geojson['features'], $feature);
}

header('Content-type: application/json');
$geoJSONtext = print trim (stripslashes(json_encode($geojson, JSON_NUMERIC_CHECK)), '"');
$geoJSONfile = fopen("gynacologists.geojson", "w") or die("Unable to open file!");
$txt = ltrim (stripslashes(json_encode($geojson, JSON_NUMERIC_CHECK)),'"');
fwrite($geoJSONfile, $txt);
fclose($geoJSONfile);

$conn = NULL;
?>