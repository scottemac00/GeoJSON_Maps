// Add console.log to check to see if your code is working
console.log("working");

// Create the map object with a center and zoom level
// let map = L.map('mapid').setView([30, -30], 2);




// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 19,
    attribution: 'Map data (c) <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "SatStreets": satStreets
};

// Alternative method to using setView()
// Create the map object with center, zoom level, and default layer
let map = L.map("mapid", {
    center: [43.7, -79.3],
    zoom: 11,
    layers: [satStreets]
});

// Pass our map layers into our layers control and add the layers
// control to the map
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the GeoJSON URLs
let airportData = "https://raw.githubusercontent.com/scottemac00/GeoJSON_Maps/main/Mapping_Earthquakes/majorAirports.json";

let torontoData = "https://raw.githubusercontent.com/scottemac00/GeoJSON_Maps/main/Mapping_Earthquakes/torontoRoutes.json";

let torontoHoods = "https://raw.githubusercontent.com/scottemac00/GeoJSON_Maps/main/Mapping_Earthquakes/torontoNeighborhoods.json";
// Get data from cities.js
// let cityData = cities;

// Grabbing our GeoJSON data
d3.json(torontoHoods).then(function(data) {
     console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data).addTo(map);
});    

// // Create a style for the lines
// let myStyle = {
//     color: "#ffffa1",
//     weight: 2
// }




