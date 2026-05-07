// var map = L.map('map').setView([40.72368447139683, -73.98026333210105], 13);

// L.tileLayer('https://tile.openstreetmap.org/{13}/{40.72368447139683}/{-73.98026333210105}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{13}/{51.505}/{-0.09}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

