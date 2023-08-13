const map = L.map('map').setView([45.9636, -66.6431], 13); // Set initial coordinates and zoom level

// map layers 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// add markers ** add all seed data vaules here **
const marker1 = L.marker([51.5, -0.09]).addTo(map); 
const marker2 = L.marker([51.51, -0.1]).addTo(map);
// const marker3 = L.marker([51.5, -0.09]).addTo(map); 
// const marker4 = L.marker([51.51, -0.1]).addTo(map);
// const marker5 = L.marker([51.5, -0.09]).addTo(map);     set these commented out markers to the seeds we are using with the correct locations 
// const marker6 = L.marker([51.51, -0.1]).addTo(map);
// const marker7 = L.marker([51.5, -0.09]).addTo(map); 
// const marker8 = L.marker([51.51, -0.1]).addTo(map);

// pop up of marker content 
marker1.bindPopup('Marker 1').openPopup();
marker2.bindPopup('Marker 2').openPopup();
// marker3.bindPopup('Marker 3').openPopup();
// marker4.bindPopup('Marker 4').openPopup();
// marker5.bindPopup('Marker 5').openPopup();              set these commented out markers to the seeds we are using with the correct locations 
// marker6.bindPopup('Marker 6').openPopup();
// marker7.bindPopup('Marker 7').openPopup();
// marker8.bindPopup('Marker 8').openPopup();

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