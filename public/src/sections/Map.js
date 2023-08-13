const map = L.map('map').setView([45.9636, -66.6431], 13); // Set initial coordinates and zoom level

// map layers 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// add markers ** add all seed data vaules here **
// Assume 'map' is your Leaflet map instance

const marker1 = L.marker([35.6895, 139.6917]).addTo(map); // Tokyo, Japan
const marker2 = L.marker([30.3285, 35.4444]).addTo(map); // Petra, Jordan
const marker3 = L.marker([48.6361, -1.5120]).addTo(map); // Mont Saint-Michel, France
const marker4 = L.marker([52.5200, 13.4050]).addTo(map); // Berlin, Germany
const marker5 = L.marker([51.5074, -0.1278]).addTo(map); // London, England
const marker6 = L.marker([40.7128, -74.0060]).addTo(map); // New York City, United States
const marker7 = L.marker([20.6843, -88.5678]).addTo(map); // Chichen Itza, Mexico
const marker8 = L.marker([13.4125, 103.8660]).addTo(map); // Angkor Wat, Cambodia
const marker9 = L.marker([37.7749, -122.4194]).addTo(map); // San Francisco, United States
const marker10 = L.marker([-23.5505, -46.6333]).addTo(map); // São Paulo, Brazil
const marker11 = L.marker([-22.9068, -43.1729]).addTo(map); // Rio de Janeiro, Brazil
const marker12 = L.marker([-33.9249, 18.4241]).addTo(map); // Cape Town, South Africa
const marker13 = L.marker([37.5665, 126.9780]).addTo(map); // Seoul, South Korea
const marker14 = L.marker([22.3964, 114.1095]).addTo(map); // Hong Kong, China
const marker15 = L.marker([13.7563, 100.5018]).addTo(map); // Bangkok, Thailand
const marker16 = L.marker([1.3521, 103.8198]).addTo(map); // Singapore
const marker17 = L.marker([41.0082, 28.9784]).addTo(map); // Istanbul, Turkey
const marker18 = L.marker([46.5191, 6.6335]).addTo(map); // Lausanne, Switzerland
const marker19 = L.marker([46.2044, 6.1432]).addTo(map); // Geneva, Switzerland
const marker20 = L.marker([43.6532, -79.3832]).addTo(map); // Toronto, Canada
const marker21 = L.marker([45.5017, -73.5673]).addTo(map); // Montreal, Canada
const marker22 = L.marker([46.4312, 6.9104]).addTo(map); // Montreux, Switzerland
const marker23 = L.marker([64.1466, -21.9426]).addTo(map); // Reykjavik, Iceland
const marker24 = L.marker([59.9139, 10.7522]).addTo(map); // Oslo, Norway
const marker25 = L.marker([51.754816, -1.254367]).addTo(map); // Bodleian Library, England
const marker26 = L.marker([51.1789, -1.8262]).addTo(map); // Stonehenge, England
const marker27 = L.marker([48.8606, 2.3376]).addTo(map); // The Louvre, France
const marker28 = L.marker([28.3852, -81.5639]).addTo(map); // Disney World, USA
const marker29 = L.marker([33.8121, -117.9190]).addTo(map); // Disneyland, USA
const marker30 = L.marker([28.5383, -81.3792]).addTo(map); // Universal Studios, USA
const marker31 = L.marker([31.2001, 29.9187]).addTo(map); // Library of Alexandria, Egypt
const marker32 = L.marker([40.4319, 116.5704]).addTo(map); // The Great Wall of China, China
const marker33 = L.marker([41.8902, 12.4922]).addTo(map); // The Colosseum, Italy
const marker34 = L.marker([37.9715, 23.7266]).addTo(map); // The Parthenon, Greece
const marker35 = L.marker([29.9792, 31.1342]).addTo(map); // The Pyramids of Giza, Egypt
const marker36 = L.marker([27.1750, 78.0422]).addTo(map); // The Taj Mahal, India
const marker37 = L.marker([9.4981, 76.3388]).addTo(map); // Kerala Backwaters, India
const marker38 = L.marker([-16.3694, 146.8587]).addTo(map); // The Great Barrier Reef, Australia
const marker39 = L.marker([36.0544, -112.1401]).addTo(map); // The Grand Canyon, USA
const marker40 = L.marker([19.0760, 72.8777]).addTo(map); // Mumbai, India
const marker41 = L.marker([-3.0674, 37.3556]).addTo(map); // Kilimanjaro, Tanzania
const marker42 = L.marker([31.7715, 35.2170]).addTo(map); // Wadi Rum, Jordan
const marker43 = L.marker([40.7128, -74.0060]).addTo(map); // Statue of Liberty, USA
const marker44 = L.marker([34.0522, -118.2437]).addTo(map); // Hollywood Sign, USA
const marker45 = L.marker([48.8566, 2.3522]).addTo(map); // Eiffel Tower, France
const marker46 = L.marker([51.1789, -115.5740]).addTo(map); // Banff National Park, Canada
const marker47 = L.marker([-13.1631, -72.5450]).addTo(map); // Machu Picchu, Peru
const marker48 = L.marker([-40.9006, 174.8860]).addTo(map); // Wellington, New Zealand
const marker49 = L.marker([45.4215, -75.6972]).addTo(map); // Ottawa, Canada
const marker50 = L.marker([46.8182, -71.2086]).addTo(map); // Quebec City, Canada
const marker51 = L.marker([41.9028, 12.4964]).addTo(map); // Vatican City
const marker52 = L.marker([51.1657, 10.4515]).addTo(map); // Germany 
const marker53 = L.marker([-25.2744, 133.7751]).addTo(map); // Australia 
const marker54 = L.marker([56.1304, -106.3468]).addTo(map); // Canada 


// pop up of marker content 
marker1.bindPopup('Tokyo, Japan').openPopup();
marker2.bindPopup('Petra, Jordan').openPopup();
marker3.bindPopup('Mont Saint-Michel, France').openPopup();
marker4.bindPopup('Berlin, Germany').openPopup();
marker5.bindPopup('London, England').openPopup();
marker6.bindPopup('New York City, United States').openPopup();
marker7.bindPopup('Chichen Itza, Mexico').openPopup();
marker8.bindPopup('Angkor Wat, Cambodia').openPopup();
marker9.bindPopup('San Francisco, United States').openPopup();
marker10.bindPopup('São Paulo, Brazil').openPopup();
marker11.bindPopup('Rio de Janeiro, Brazil').openPopup();
marker12.bindPopup('Cape Town, South Africa').openPopup();
marker13.bindPopup('Seoul, South Korea').openPopup();
marker14.bindPopup('Hong Kong, China').openPopup();
marker15.bindPopup('Bangkok, Thailand').openPopup();
marker16.bindPopup('Singapore').openPopup();
marker17.bindPopup('Istanbul, Turkey').openPopup();
marker18.bindPopup('Lausanne, Switzerland').openPopup();
marker19.bindPopup('Geneva, Switzerland').openPopup();
marker20.bindPopup('Toronto, Canada').openPopup();
marker21.bindPopup('Montreal, Canada').openPopup();
marker22.bindPopup('Montreux, Switzerland').openPopup();
marker23.bindPopup('Reykjavik, Iceland').openPopup();
marker24.bindPopup('Oslo, Norway').openPopup();
marker25.bindPopup('Oxford, England').openPopup();
marker26.bindPopup('Salisbury, England').openPopup();
marker27.bindPopup('Paris, France').openPopup();
marker28.bindPopup('Orlando, USA').openPopup();
marker29.bindPopup('Anaheim, USA').openPopup();
marker30.bindPopup('Orlando, USA').openPopup();
marker31.bindPopup('Alexandria, Egypt').openPopup();
marker32.bindPopup('Beijing, China').openPopup();
marker33.bindPopup('Rome, Italy').openPopup();
marker34.bindPopup('Athens, Greece').openPopup();
marker35.bindPopup('Giza, Egypt').openPopup();
marker36.bindPopup('Agra, India').openPopup();
marker37.bindPopup('Kerala, India').openPopup();
marker38.bindPopup('Queensland, Australia').openPopup();
marker39.bindPopup('Arizona, USA').openPopup();
marker40.bindPopup('Mumbai, India').openPopup();
marker41.bindPopup('Kilimanjaro, Tanzania').openPopup();
marker42.bindPopup('Wadi Rum, Jordan').openPopup();
marker43.bindPopup('New York City, USA').openPopup();
marker44.bindPopup('Los Angeles, USA').openPopup();
marker45.bindPopup('Paris, France').openPopup();
marker46.bindPopup('Alberta, Canada').openPopup();
marker47.bindPopup('Cusco Region, Peru').openPopup();
marker48.bindPopup('Wellington, New Zealand').openPopup();
marker49.bindPopup('Ontario, Canada').openPopup();
marker50.bindPopup('Quebec, Canada').openPopup();
marker51.bindPopup('Vatican City').openPopup();
marker52.bindPopup('Berlin, Germany').openPopup();
marker53.bindPopup('Uluru, Australia').openPopup();
marker54.bindPopup('Ottawa, Canada').openPopup();


// marker customizations 
const customIcon = L.icon({
    // iconUrl: 'path/to/icon.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32]
  });
  const customMarker = L.marker([51.5, -0.09], { icon: customIcon }).addTo(map);
  
//   marker funtion , for interactivity 
customMarker.on('click', function () {
    alert('Custom marker clicked!');
  });