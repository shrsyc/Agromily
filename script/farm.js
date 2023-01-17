const apiKey = 'pk.eyJ1IjoiYWxmcmVkMjAxNiIsImEiOiJja2RoMHkyd2wwdnZjMnJ0MTJwbnVmeng5In0.E4QbAFjiWLY8k3AFhDtErA';

const mymap = L.map('map').setView([13.005052, 76.100036], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);



//---------------------------------------------------------------------------------------------------------

const farm1 = L.marker([12.962413, 76.171714]).addTo(mymap);//12.962413, 76.171714

let template1 = `

<h3>SIDDA'S FARM</h3>
<div style="text-align:center">
    <img width="150" height="150"src="../images/avatar1.png"/>
</div>
`
farm1.bindPopup(template1);

const circle1 = L.circle([12.962413, 76.171714

], {
    radius:200, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('I am a circle')


//----------------------------------------------------------------------------------------------------

const farm2 = L.marker([13.003196, 76.176706]).addTo(mymap);//12.962413, 76.171714

let template2 = `

<h3>SIDDA'S FARM</h3>
<div style="text-align:center">
    <img width="150" height="150"src="../images/avatar1.png"/>
</div>
`
farm2.bindPopup(template2);

const circle2 = L.circle([13.003196, 76.176706

], {
    radius:200, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('I am a circle')



//---------------------------------------------------------------------------------------------------------


const farm3 = L.marker([12.975989, 76.065640]).addTo(mymap);//12.962413, 76.171714

let template3 = `

<h3>SIDDA'S FARM</h3>
<div style="text-align:center">
    <img width="150" height="150"src="../images/avatar1.png"/>
</div>
`
farm3.bindPopup(template3);

const circle3 = L.circle([12.975989, 76.065640

], {
    radius:200, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('I am a circle')



//---------------------------------------------------------------------------------------------------------


const farm4 = L.marker([13.041216, 76.046588]).addTo(mymap);//12.962413, 76.171714

let template4 = `

<h3>SIDDA'S FARM</h3>
<div style="text-align:center">
    <img width="150" height="150"src="../images/avatar1.png"/>
</div>
`
farm4.bindPopup(template4);

const circle4 = L.circle([13.041216, 76.046588

], {
    radius:200, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('I am a circle')



//---------------------------------------------------------------------------------------------------------


const farm5 = L.marker([12.983908, 76.002583]).addTo(mymap);//12.962413, 76.171714

let template5 = `

<h3>SIDDA'S FARM</h3>
<div style="text-align:center">
    <img width="150" height="150"src="../images/avatar1.png"/>
</div>
`
farm5.bindPopup(template4);

const circle5 = L.circle([12.983908, 76.002583

], {
    radius:200, 
    color: 'green', 
    fillColor: 'red',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('I am a circle')






//------------------------------------------------------------------------------------------

const circle6 = L.circle([13.005293, 76.101133
], {
    radius:10000, 
    color: 'green', 
    fillColor: 'green',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('Market controll')


//------------------------------------------------------------------------------------------


const polygon = L.polygon([
   
    [13.003043, 76.091503],
    [12.999013, 76.091558],
    [13.000891, 76.093717],
    [13.004627, 76.094277]
], {
    color:'red',
    fillColor:'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup(' Major Market Chain')


