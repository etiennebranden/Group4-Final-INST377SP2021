


// Database 
var map = L.map('map').setView([37.8, -96], 4);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={pk.eyJ1IjoiZ3NhbXJhIiwiYSI6ImNrbnBsbWUyNDFneXoydnB1YnEyODRoenIifQ.jy9pfKpWoMpdCnyHBXOvPQ}', {
    attribution: '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);

