// console.log('working!!!');

const canvas = d3.select('.canva');

var width = '100%';
var height = '100%';
//const api_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson';
const api_url = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson';

const svg = canvas.append('svg')
            .attr('width', width)
            .attr('height', height);

// define the div for tooltip
var div = d3.select('body').append('div')
                .attr('class', 'tooltip')
                .style('opacity', 0);
            
function timeStamptoDate(mTime) {
    var mDate = new Date(mTime);
    return mDate.toLocaleDateString('en-uk');
}                

// parse json
d3.json(api_url)
    .then(data => {
        // code
        //console.log(data);
        const circle = svg.selectAll('circle')
            .data(data.features);

        circle.attr('cx', (d, i) => Math.floor(Math.random() * 200) + d.properties.mag)
                .attr('cy', (d, i) => Math.floor(Math.random() * 100) + d.properties.mag)
                .attr('r', (d, i) => (d.properties.mag * 2))
                .attr('fill', (d, i) => d.properties.alert);

        // append enter selection on add new circle
        circle.enter()
            .append('circle')
            .attr('cx', (d, i) => Math.floor(Math.random() * 200) + d.properties.mag)
            .attr('cy', (d, i) => Math.floor(Math.random() * 100) + d.properties.mag)
            .attr('r', (d, i, n) => (d.properties.mag * 2))
            .style('top', 156)
            .on('mouseover', function(d, i, n) {
                d3.select(n[i])
                .transition()
                .duration(100)  // in milliseconds
                .style('opacity', 0.7)
                
                div.transition()
                    .duration(200)
                    .style('opacity', 0.9);
                div.html('<p> Mag: '+ d.properties.mag +'</p>'
                + '<p> Time: ' + timeStamptoDate(d.properties.time) + '</p>'
                + '<p> Place: ' + d.properties.place + '</p>')   
                    .style('left', (d3.event.pageX) + 'px') 
                    .style('top', (d3.event.pageY - 27) + 'px')
            })
            .on('mouseout', function(d, i, n) {
                d3.select(n[i])
                .transition()
                .duration(100)  // in milliseconds
                .style('opacity', 1)

                div.transition()
                    .duration(500)
                    .style('opacity', 0);


            })
            .attr('fill', (d, i) => d.properties.alert);

        
    });

    
