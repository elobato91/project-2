var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 5
});

L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets-basic",
  accessToken: API_KEY
}).addTo(myMap);

// Define a markerSize function that will give each city a different radius based on its population
function markerSize(Size) {
  return Size / 40;
}

var towers = [
  {
    name: "Birmingham",
    location: [33.518589, -86.810356],
    Size: 2000000
  },
  {
    name: "Huntsville",
    location: [34.729542, -86.585297],
    Size: 2000000
  },
  {
    name: "Gila County",
    location: [33.294080, -112.642680],
    Size: 2000000
  },
  {
    name: "Phoenix",
    location: [33.4484, -112.0740],
    Size: 2000000
  },
  {
    name: "Bakersfield",
    location: [35.3733, -119.0187],
    Size: 2000000
  },
  {
    name: "Los Angeles",
    location: [34.0522, -118.2437],
    Size: 2000000
  },
  {
    name: "Madera County",
    location: [37.2519, -119.6963],
    Size: 2000000
  },
  {
    name: "Menlo Park",
    location: [37.4530, -122.1817],
    Size: 2000000
  },
  {
    name: "Modesto",
    location: [37.6393, -120.9970],
    Size: 2000000
  },
  {
    name: "Mono",
    location: [37.9219, -118.9529],
    Size: 2000000
  },
  {
    name: "Oakland",
    location: [37.8044, -122.2712],
    Size: 2000000
  },
  {
    name: "Oxnard",
    location: [34.1975, -119.1771],
    Size: 2000000
  },
  {
    name: "Redwood City",
    location: [37.4852, -122.2364],
    Size: 2000000
  },
  {
    name: "San Bruno",
    location: [37.6305, -122.4111],
    Size: 2000000
  },
  {
    name: "San Diego",
    location: [32.7157, -117.1611],
    Size: 2000000
  },
  {
    name: "San Francisco",
    location: [37.7749, -122.4194],
    Size: 2000000
  },
  {
    name: "San Jose",
    location: [37.3382, -121.8863],
    Size: 2000000
  },
  {
    name: "San Luis Obispo",
    location: [35.2828, -120.6596],
    Size: 2000000
  },
  {
    name: "Santa Barbara",
    location: [34.4208, -119.6982],
    Size: 2000000
  },
  {
    name: "Santa Cruz",
    location: [36.9741, -122.0308],
    Size: 2000000
  },
  {
    name: "Santa Rosa",
    location: [38.4404, -122.7141],
    Size: 2000000
  },
  {
    name: "Vallejo",
    location: [38.1041, -122.2566],
    Size: 2000000
  },
  {
    name: "West Hollywood",
    location: [34.0900, -118.3617],
    Size: 2000000
  },
  {
    name: "Denver",
    location: [39.7392, -104.9903],
    Size: 2000000
  },
  {
    name: "New Haven",
    location: [41.3083, -72.9279],
    Size: 2000000},
  {
    name: "Bridgeport",
    location: [41.1792, -73.1894],
    Size: 2000000
  },
  {
    name: "Washington",
    location: [38.9072, -77.0369],
    Size: 2000000
  },
  {
    name: "Kent County",
    location: [39.1441, -75.4345],
    Size: 2000000
  },
  {
    name: "Wilmington",
    location: [39.7447, -75.5484],
    Size: 2000000
  },
  {
    name: "Jacksonville",
    location: [30.3322, -81.6557],
    Size: 2000000
  },
  {
    name: "Miami",
    location: [25.7617, -80.1918],
    Size: 2000000
  },
  {
    name: "Miami Gardens",
    location: [25.9420, -80.2456],
    Size: 2000000
  },
  {
    name: "Orlando",
    location: [28.5383, -81.3792],
    Size: 2000000
  },
  {
    name: "Albany",
    location: [31.5785, -84.1557],
    Size: 2000000
  },
  {
    name: "Athens",
    location: [33.9519, -83.3576],
    Size: 2000000
  },
  {
    name: "Atlanta",
    location: [33.7490, -84.3880],
    Size: 2000000},
  {
    name: "Chattooga County",
    location: [34.4633, -85.3136],
    Size: 2000000
  },
  {
    name: "Hancock County",
    location: [33.2883, -83.0361],
    Size: 2000000
  },
  {
    name: "Liberty",
    location: [31.8430, -81.4718],
    Size: 2000000
  },
  {
    name: "Macon",
    location: [32.8407, -83.6324],
    Size: 2000000
  },
  {
    name: "Whitfield County",
    location: [34.8034, -84.9818],
    Size: 2000000
  },
  {
    name: "Worth County",
    location: [31.5282, -83.8897],
    Size: 2000000
  },
  {
    name: "Washington County",
    location: [38.3989, -89.3227],
    Size: 2000000
  },
  {
    name: "Brown County",
    location: [39.1750, -86.1752],
    Size: 2000000
  },
  {
    name: "Indianapolis",
    location: [39.7684, -86.1581],
    Size: 2000000
  },
  {
    name: "Topeka",
    location: [39.0473, -95.6752],
    Size: 2000000
  },
  {
    name: "Wichita",
    location: [37.6872, -97.3301],
    Size: 2000000
  },
  {
    name: "Lexington-Fayette",
    location: [38.0406, -84.5037],
    Size: 2000000
  },
  {
    name: "Louisville",
    location: [38.2527, -85.7585],
    Size: 2000000
  },
  {
    name: "New Orleans",
    location: [29.9511, -90.0715],
    Size: 2000000
  },
  {
    name: "Boston",
    location: [42.3601, -71.0589],
    Size: 2000000
  },
  {
    name: "New Bedford",
    location: [41.6362, -70.9342],
    Size: 2000000
  },
  {
    name: "Worcester",
    location: [42.2626, -71.8023],
    Size: 2000000
  },
  {
    name: "Baltimore",
    location: [39.2904, -76.6122],
    Size: 2000000
  },
  {
    name: "Frederick",
    location: [39.4143, -77.4105],
    Size: 2000000
  },
  {
    name: "Ocean City",
    location: [38.3365, -75.0849],
    Size: 2000000
  },
  {
    name: "Detroit",
    location: [42.3314, -83.0458],
    Size: 2000000
  },
  {
    name: "Newaygo County",
    location: [43.5594, -85.7667],
    Size: 2000000
  },
  {
    name: "Kalamazoo",
    location: [42.2917, -85.5872],
    Size: 2000000
  },
  {
    name: "Kansas City",
    location: [39.0997, -94.5786],
    Size: 2000000
  },
  {
    name: "Springfield",
    location: [37.2090, -93.2923],
    Size: 2000000
  },
  {
    name: "St. Louis",
    location: [38.6270, -90.1994],
    Size: 2000000
  },
  {
    name: "Beaverhead County",
    location: [45.2135, -113.1093],
    Size: 2000000
  },
  {
    name: "Lincoln County",
    location: [48.5881, -115.6597],
    Size: 2000000
  },
  {
    name: "Charlotte",
    location: [35.2271, -80.8431],
    Size: 2000000
  },
  {
    name: "Raleigh",
    location: [35.7796, -78.6382],
    Size: 2000000
  },
  {
    name: "Atlantic City",
    location: [39.3643, -74.4229],
    Size: 2000000
  },
  {
    name: "hunterdon County",
    location: [40.5670, -74.9209],
    Size: 2000000
  },
  {
    name: "Long Beach",
    location: [40.3043, -73.9924],
    Size: 2000000
  },
  {
    name: "New Brunswick",
    location: [40.4862, -74.4518],
    Size: 2000000
  },
  {
    name: "Ocean County",
    location: [39.9653, -74.3118],
    Size: 2000000
  },
  {
    name: "Sussex county",
    location: [41.1288, -74.6869],
    Size: 2000000
  },
  {
    name: "Trenton",
    location: [40.2206, -74.7597],
    Size: 2000000
  },
  {
    name: "Las Cruces",
    location: [32.3199, -106.7637],
    Size: 2000000
  },
  {
    name: "Las Vegas",
    location: [36.1699, -115.1398],
    Size: 2000000
  },
  {
    name: "Reno",
    location: [39.5296, -119.8138],
    Size: 2000000
  },
  {
    name: "Storey County",
    location: [39.4090, -119.5572],
    Size: 2000000
  },
  {
    name: "Albany",
    location: [42.6526, -73.7562],
    Size: 2000000
  },
  {
    name: "Binghamton",
    location: [42.0987, -75.9180],
    Size: 2000000
  },
  {
    name: "Buffalo",
    location: [42.8864, -78.8784],
    Size: 2000000
  },
  {
    name: "New York City",
    location: [40.7128, -74.0060],
    Size: 2000000
  },
  {
    name: "Orange County",
    location: [41.3912, -74.3118],
    Size: 2000000
  },
  {
    name: "Otsego County",
    location: [42.5780, -75.0611],
    Size: 2000000
  },
  {
    name: "Rochester",
    location: [43.1566, -77.6088],
    Size: 2000000
  },
  {
    name: "Syracuse",
    location: [43.0481, -76.1474],
    Size: 2000000
  },
  {
    name: "Utica-Rome",
    location: [43.2763, -75.1545],
    Size: 2000000
  },
  {
    name: "Cincinnati",
    location: [39.1031, -84.5120],
    Size: 2000000
  },
  {
    name: "Cleveland",
    location: [41.4993, -81.6944],
    Size: 2000000
  },
  {
    name: "Columbus",
    location: [39.9612, -82.9988],
    Size: 2000000
  },
  {
    name: "Dayton",
    location: [39.7589, -84.1916],
    Size: 2000000
  },
  {
    name: "Hamilton",
    location: [39.3995, -84.5613],
    Size: 2000000
  },
  {
    name: "Hancock County",
    location: [41.0273, -83.6774],
    Size: 2000000
  },
  {
    name: "Ross county",
    location: [39.3584, -82.9932],
    Size: 2000000
  },
  {
    name: "Sandusky County",
    location: [41.3559, -83.1220],
    Size: 2000000
  },
  {
    name: "Springfield",
    location: [39.8912, -83.6774],
    Size: 2000000
  },
  {
    name: "Tuscarawas County",
    location: [40.3979, -81.4279],
    Size: 2000000
  },
  {
    name: "Oklahoma City",
    location: [35.4676, -97.5164],
    Size: 2000000
  },
  {
    name: "Portland",
    location: [45.5051, -122.6750],
    Size: 2000000
  },
  {
    name: "Salem",
    location: [44.9429, -123.0351],
    Size: 2000000
  },
  {
    name: "Allentown",
    location: [40.6023, -75.4714],
    Size: 2000000
  },
  {
    name: "Harrisburg",
    location: [40.2732, -76.8867],
    Size: 2000000
  },
  {
    name: "King of Prussia",
    location: [40.1013, -75.3836],
    Size: 2000000
  },
  {
    name: "Lancaster",
    location: [40.0379, -76.3055],
    Size: 2000000
  },
  {
    name: "Philadaphia",
    location: [39.9526, -75.1652],
    Size: 2000000
  },
  {
    name: "Pittsburg",
    location: [40.4406, -79.9959],
    Size: 2000000
  },
  {
    name: "Reading",
    location: [40.3356, -75.9269],
    Size: 2000000
  },
  {
    name: "State College",
    location: [40.7934, -77.8600],
    Size: 2000000
  },
  {
    name: "York",
    location: [39.9626, -76.7277],
    Size: 2000000
  },
  {
    name: "Providence",
    location: [41.8240, -71.4128],
    Size: 2000000
  },
  {
    name: "Nashville",
    location: [36.1627, -86.7816],
    Size: 2000000
  },
  {
    name: "Austin",
    location: [30.2672, -97.7431],
    Size: 2000000
  },
  {
    name: "Dallas",
    location: [32.7767, -96.7970],
    Size: 2000000
  },
  {
    name: "Houston",
    location: [29.7604, -95.3698],
    Size: 2000000
  },
  {
    name: "San Antonio",
    location: [29.4241, -98.4936],
    Size: 2000000
  },
  {
    name: "Waco",
    location: [31.5493, -97.1467],
    Size: 2000000
  },
  {
    name: "Provo",
    location: [31.5493, -97.1467],
    Size: 2000000
  },
  {
    name: "Madison County",
    location: [38.3804, -78.2575],
    Size: 2000000
  },
  {
    name: "Spokane",
    location: [47.6588, -117.4260],
    Size: 2000000},
  {
    name: "Milwaukee",
    location: [43.0389, -87.9065],
    Size: 2000000
  },
  {
    name: "Raleigh County",
    location: [37.7382, -81.2519],
    Size: 2000000
  }
];

for (var i = 0; i < towers.length; i++) {
  L.circle(towers[i].location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: "purple",
    // Setting our circle's radius equal to the output of our markerSize function
    // This will make our marker's size proportionate to its population
    radius: markerSize(towers[i].Size)
  }).bindPopup(towers[i].name).addTo(myMap);
}
