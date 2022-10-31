mapboxgl.accessToken = "pk.eyJ1IjoibmluZXZlaG9tYXAiLCJhIjoiY2w5d3R3NHVrMDBqZDNxcWxrMGt3Y21wMSJ9.F3_lqP-kbMq1X8N-xVWrlg"; //YOUR KEY HERE
     
// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
    container: "map", // container ID for the map object (this points to the HTML element)
    style: "mapbox://styles/ninevehomap/cl9wu1pdd002p15s583ifqru9",
    center: [-75.1652, 39.9526], // starting position [lng, lat]
    zoom: 12, // starting zoom
    projection: "globe", // display the map as a 3D globe
});

// ADD A GEOJSON SOURCE THAT POINTS TO YOUR LOCAL FILE
map.on("load", function () {
    map.addSource("nec", {
      type: "geojson",
      data: "./neighborhood_energy_centers.geojson",
    });
   
    // ADD A LAYER TO THE MAP
    map.addLayer({
      id: "nec",
      type: "circle",
      source: "nec",
      layout: {},
      paint: {
        "circle-color": "#0f095e",
      },
    });
  });
  