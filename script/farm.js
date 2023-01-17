const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([12.962413, 76.171714], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

// Adding Marker

const marker = L.marker([12.962413, 76.171714]).addTo(mymap);//12.962413, 76.171714

// Add popup message
let template = `

<h3>Empire State Building</h3>
<div style="text-align:center">
    <img width="150" height="150"src="image.jpg"/>
</div>
`
marker.bindPopup(template);

// Add circle 

const circle = L.circle([12.962413, 76.171714], {
    radius:600, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('I am a circle')

// Add Polygon

const polygon = L.polygon([
   
    [12.962413, 76.171714],
    [13, 76.171714],
    [12.962413, 76],
    [12.962413, 76.171714],
], {
    color:'blue',
    fillColor:'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup(' I am a polygon')

// polygon.bindPopup(' I am a polygon')

