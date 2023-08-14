const map = L.map('map').setView([45.9636, -66.6431], 13); // Set initial coordinates and zoom level

// map layers 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// add markers ** add all seed data vaules here **
// Assume 'map' is your Leaflet map instance

 // map markers to match seed data 
 const marker1 = L.marker([35.6895, 139.6917]).addTo(map); // Tokyo, Japan
 const marker2 = L.marker([30.3285, 35.4444]).addTo(map); // Petra, Jordan
 const marker3 = L.marker([48.6369, -1.5126]).addTo(map); // Mont Saint-Michel, France
 const marker4 = L.marker([52.5200, 13.4050]).addTo(map); // Berlin, Germany
 const marker5 = L.marker([51.5074, -0.1278]).addTo(map); // London, England
 const marker6 = L.marker([40.7128, -74.0060]).addTo(map); // New York City, USA
 const marker7 = L.marker([20.6843, -88.5678]).addTo(map); // Chichen Itza, Mexico
 const marker8 = L.marker([13.4125, 103.8660]).addTo(map); // Angkor Wat, Cambodia
 const marker9 = L.marker([37.7749, -122.4194]).addTo(map); // San Francisco, USA
 const marker10 = L.marker([-23.5505, -46.6333]).addTo(map); // São Paulo, Brazil
 const marker11 = L.marker([-22.9068, -43.1729]).addTo(map); // Rio de Janeiro, Brazil
 const marker12 = L.marker([-33.9249, 18.4241]).addTo(map); // Cape Town, South Africa
 const marker13 = L.marker([37.5665, 126.9780]).addTo(map); // Seoul, South Korea
 const marker14 = L.marker([22.3193, 114.1694]).addTo(map); // Hong Kong, China
 const marker15 = L.marker([13.7563, 100.5018]).addTo(map); // Bangkok, Thailand
 const marker16 = L.marker([1.3521, 103.8198]).addTo(map); // Singapore
 const marker17 = L.marker([41.0082, 28.9784]).addTo(map); // Istanbul, Turkey
 const marker18 = L.marker([46.5197, 6.6322]).addTo(map); // Lausanne, Switzerland
 const marker19 = L.marker([46.2044, 6.1432]).addTo(map); // Geneva, Switzerland
 const marker20 = L.marker([43.6532, -79.3832]).addTo(map); // Toronto, Canada
 const marker21 = L.marker([45.5017, -73.5673]).addTo(map); // Montreal, Canada
 const marker22 = L.marker([46.4312, 6.9104]).addTo(map); // Montreux, Switzerland
 const marker23 = L.marker([64.1265, -21.8174]).addTo(map); // Reykjavik, Iceland
 const marker24 = L.marker([59.9139, 10.7522]).addTo(map); // Oslo, Norway
 const marker25 = L.marker([51.754816, -1.254367]).addTo(map); // Bodleian Library, England
 const marker26 = L.marker([51.1789, -1.8262]).addTo(map); // Stonehenge, England
 const marker27 = L.marker([48.8606, 2.3376]).addTo(map); // The Louvre, France
 const marker28 = L.marker([28.3852, -81.5639]).addTo(map); // Disney World, USA
 const marker29 = L.marker([33.8121, -117.9190]).addTo(map); // Disneyland, USA
 const marker30 = L.marker([34.1381, -118.3534]).addTo(map); // Universal Studios, USA
 const marker31 = L.marker([31.2001, 29.9187]).addTo(map); // Library of Alexandria, Egypt
 const marker32 = L.marker([40.4319, 116.5704]).addTo(map); // The Great Wall of China, China
 const marker33 = L.marker([41.8902, 12.4922]).addTo(map); // The Colosseum, Italy
 const marker34 = L.marker([37.9715, 23.7263]).addTo(map); // The Parthenon, Greece
 const marker35 = L.marker([29.9792, 31.1342]).addTo(map); // The Pyramids of Giza, Egypt
 const marker36 = L.marker([27.1750, 78.0422]).addTo(map); // The Taj Mahal, India
 const marker37 = L.marker([9.5492, 76.4190]).addTo(map); // Kerala Backwaters, India
 const marker38 = L.marker([-18.2871, 147.6992]).addTo(map); // The Great Barrier Reef, Australia
 const marker39 = L.marker([36.1069, -112.1129]).addTo(map); // The Grand Canyon, USA
 const marker40 = L.marker([19.0760, 72.8777]).addTo(map); // Mumbai, India
 const marker41 = L.marker([-3.0674, 37.3556]).addTo(map); // Kilimanjaro, Tanzania
 const marker42 = L.marker([31.6295, -7.9811]).addTo(map); // Marrakech, Morocco
 const marker43 = L.marker([26.2041, 28.0473]).addTo(map); // Johannesburg, South Africa
 const marker44 = L.marker([-13.1631, -72.5450]).addTo(map); // Machu Picchu, Peru
 const marker45 = L.marker([33.5731, -7.5898]).addTo(map); // Casablanca, Morocco
 const marker46 = L.marker([17.9249, 25.8575]).addTo(map); // Victoria Falls, Zimbabwe
 const marker47 = L.marker([6.1655, 39.1985]).addTo(map); // Zanzibar, Tanzania
 const marker48 = L.marker([-18.6657, 24.4780]).addTo(map); // Chobe National Park, Botswana
 const marker49 = L.marker([30.0444, 31.2357]).addTo(map); // The Nile, Egypt
 const marker50 = L.marker([-2.3333, 34.8333]).addTo(map); // The Serengeti, Tanzania
 const marker51 = L.marker([-1.2921, 36.8219]).addTo(map); // Nairobi, Kenya
 const marker52 = L.marker([63.7467, -68.5170]).addTo(map); // Iqaluit, Canada
 const marker53 = L.marker([60.7212, -135.0568]).addTo(map); // Whitehorse, Canada
 const marker54 = L.marker([31.2001, 29.9187]).addTo(map); // Alexandria, Egypt
 


// pop up of marker content 
marker1.bindPopup('Tokyo, Japan').openPopup();
marker2.bindPopup('Petra, Jordan').openPopup();
marker3.bindPopup('Mont Saint-Michel, France').openPopup();
marker4.bindPopup('Berlin, Germany').openPopup();
marker5.bindPopup('London, England').openPopup();
marker6.bindPopup('New York City, USA').openPopup();
marker7.bindPopup('Chichen Itza, Mexico').openPopup();
marker8.bindPopup('Angkor Wat, Cambodia').openPopup();
marker9.bindPopup('San Francisco, USA').openPopup();
marker10.bindPopup('São Paulo, Brazil').openPopup();
marker11.bindPopup('Rio de Janeiro, Brazil').openPopup();
marker12.bindPopup('Cape Town, South Africa').openPopup();
marker13.bindPopup('Seoul, South Korea').openPopup();
marker14.bindPopup('Hong Kong, China').openPopup();
marker15.bindPopup('Bangkok, Thailand').openPopup();
marker16.bindPopup('Singapore, Singapore').openPopup();
marker17.bindPopup('Istanbul, Turkey').openPopup();
marker18.bindPopup('Lausanne, Switzerland').openPopup();
marker19.bindPopup('Geneva, Switzerland').openPopup();
marker20.bindPopup('Toronto, Canada').openPopup();
marker21.bindPopup('Montreal, Canada').openPopup();
marker22.bindPopup('Montreux, Switzerland').openPopup();
marker23.bindPopup('Reykjavik, Iceland').openPopup();
marker24.bindPopup('Oslo, Norway').openPopup();
marker25.bindPopup('Bodleian Library, England').openPopup();
marker26.bindPopup('Stonehenge, England').openPopup();
marker27.bindPopup('The Louvre, France').openPopup();
marker28.bindPopup('Disney World, USA').openPopup();
marker29.bindPopup('Disneyland, USA').openPopup();
marker30.bindPopup('Universal Studios, USA').openPopup();
marker31.bindPopup('Library of Alexandria, Egypt').openPopup();
marker32.bindPopup('The Great Wall of China, China').openPopup();
marker33.bindPopup('The Colosseum, Italy').openPopup();
marker34.bindPopup('The Parthenon, Greece').openPopup();
marker35.bindPopup('The Pyramids of Giza, Egypt').openPopup();
marker36.bindPopup('The Taj Mahal, India').openPopup();
marker37.bindPopup('Kerala Backwaters, India').openPopup();
marker38.bindPopup('The Great Barrier Reef, Australia').openPopup();
marker39.bindPopup('The Grand Canyon, USA').openPopup();
marker40.bindPopup('Mumbai, India').openPopup();
marker41.bindPopup('Kilimanjaro, Tanzania').openPopup();
marker42.bindPopup('Marrakech, Morocco').openPopup();
marker43.bindPopup('Johannesburg, South Africa').openPopup();
marker44.bindPopup('Machu Picchu, Peru').openPopup();
marker45.bindPopup('Casablanca, Morocco').openPopup();
marker46.bindPopup('Victoria Falls, Zimbabwe').openPopup();
marker47.bindPopup('Zanzibar, Tanzania').openPopup();
marker48.bindPopup('Chobe National Park, Botswana').openPopup();
marker49.bindPopup('The Nile, Egypt').openPopup();
marker50.bindPopup('The Serengeti, Tanzania').openPopup();
marker51.bindPopup('Nairobi, Kenya').openPopup();
marker52.bindPopup('Iqaluit, Canada').openPopup();
marker53.bindPopup('Whitehorse, Canada').openPopup();
marker54.bindPopup('Alexandria, Egypt').openPopup();

// marker customizations 
const customIcon = L.icon({
    // iconUrl: 'path/to/icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
  const defaultMarker = L.marker([51.5, -0.09], { icon: customIcon }).addTo(map);
  
//   marker funtion , for interactivity 
// customMarker.on('click', function () {
//     alert('Custom marker clicked!');
//   });

  defaultMarker.on('click', function () {
  alert('Default marker clicked!');
});