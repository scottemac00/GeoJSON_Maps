// Add console.log to check to see if your code is working
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([30, -30], 2);

// Alternative method to using setView()
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 19,
    attribution: 'Map data (c) <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Accessing the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/scottemac00/GeoJSON_Maps/Mapping_Earthquakes/Mapping_Earthquakes/majorAirports.json";

// Get data from cities.js
// let cityData = cities;

// Grabbing our GeoJSON data
d3.json(airportData).then(function(data) {
     console.log(data);
     // Creating a GeoJSON layer with the retrieved data
     L.geoJSON(data, {
        // Turn each feature into a marker on the map
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup("<h2> Airport Code: " + feature.properties.faa + "<hr><h2> Airport: " + feature.properties.name + "</h2>");
        }
     }).addTo(map);
});


