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
let satStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps
let baseMaps = {
    "Streets": streets,
    "Satellite": satStreets
};

// Alternative method to using setView()
// Create the map object with center, zoom level, and default layer
let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers
// control to the map
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// Accessing the GeoJSON URL
let earthquakeData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Get data from cities.js
// let cityData = cities;

// Grabbing our GeoJSON data
d3.json(earthquakeData).then(function(data) {
     console.log(data);
    // Creating a GeoJSON layer with the retrieved data
    L.geoJSON(data, {
        // We turn each feature into a circleMarker on the map
        pointToLayer: function(feature, latlng) {
            console.log(data);
            return L.circleMarker(latlng);
        },
        // Set the style for each circleMarker using styleInfo function
        style: styleInfo
    }).addTo(map);
    // This function returns the style data for each of the earthquakes 
    // we plot on the map. We pass the magnitude of the earthquake into 
    // a function to calculate the radius.
    function styleInfo(feature) {
        return {
          opacity: 1,
          fillOpacity: 1,
          fillColor: "#ffae42",
          color: "#000000",
          radius: getRadius(),
          stroke: true,
          weight: 0.5
        };
      }
    // This function determines the radius of the earthquake marker 
    // based on its magnitude.Earthquakes with a magnitude of 0 will 
    // be plotted with a radius of 1.
    function getRadius(magnitude) {
    if (magnitude === 0) {
      return 1;
    }
    return magnitude * 4;
  }  
}).addTo(map);            
//         onEachFeature: function(feature, layer) {
//             console.log(layer);
//             layer.bindPopup("<h2>Magnitude: " + feature.properties.mag + "<hr></h2>" + "<h2>Location: " + feature.properties.place + "</h2>");
// }}).addTo(map);
// });


