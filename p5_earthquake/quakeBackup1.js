// console.log('working!!!');


const canvas = d3.select('.canva');

var width = 600;
var height = 600;
const api_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson';

const svg = canvas.append('svg')
            .attr('width', width)
            .attr('height', height);


// parse json
d3.json(api_url)
    .then(data => {
        // code
        console.log(data);
    });