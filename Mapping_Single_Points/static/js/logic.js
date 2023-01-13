// Add console.log to check to see if your code is working
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Alternative method to using setView()
// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 19,
    attribution: 'Map data (c) <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/dark-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add a marker to the map for Los Angeles, California
// let marker = L.marker([34.0522, -118.2437]).addTo(map);
// L.circle([34.0522, -118.2437], {
//     radius: 100,
//     color: 
// }).addTo(map);

var circle = L.circle([34.0522, -118.2437], {
    color: 'black',
    fillColor: '#ffffa1',
    fillOpacity: 0.5,
    radius: 300
}).addTo(map);
