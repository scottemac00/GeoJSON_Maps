// An array containing each city's location, state, and population.
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY",
    population: 8398748
  },
  {
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
  },
  {
    location: [30.2672, -97.7431],
    city: "Austin",
    state: "TX",
    population: 2350000
  },
  {
    location: [37.7749, -122.4194],
    city: "San Fransisco Bay Area",
    state: "CA",
    population: 7753000
  },
  {
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
  },
  {
    location: [27.9506, -82.4572],
    city: "Tampa Bay Area",
    state: "FL",
    population: 3220000
  },
  {
    location: [43.6532, -79.3832],
    city: "Toronto",
    state: "Canada",
    population: 2930000    
  }

  ];

  // Add GeoJSON data
  let sanFranAirport =
  {"type":"FeatureCollection","features":[{
    "type":"Feature",
    "properties":{
        "id":"3469",
        "name":"San Francisco International Airport",
        "city":"San Francisco",
        "country":"United States",
        "faa":"SFO",
        "icao":"KSFO",
        "alt":"14",
        "tz-offset":"-8",
        "dst":"A",
        "tz":"America/Los_Angeles"},
        "geometry":{
            "type":"Point",
            "coordinates":[-122.375,37.61899948120117]}}

  ]};