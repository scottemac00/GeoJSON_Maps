// Add console.log to check to see if your code is working
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([47.1164, -101.2996], 4);

// Alternative method to using setView()
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 19,
    attribution: 'Map data (c) <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000,
        color: 'orange',
        fillColor: 'orange',
        fillOpacity: 0.2

    })
    .bindPopup("<h2>" + city.city + ", " + city.state + 
    "</h2> <hr> <h3>Population: " + city.population.toLocaleString() + 
    "</h3>")
    .addTo(map);
   });

// Coordinates for each point to be used in the polyline
let line = [
    [37.6214, -122.3790],
    [30.1975, -97.6664],
    [43.6777, -79.6248],
    [40.6413, -73.7781],
    [27.9772, -82.5311]
];

// Create a polyline using thet line coordinates and make the line red
L.polyline(line, {
    color: 'yellow'
}).addTo(map);
