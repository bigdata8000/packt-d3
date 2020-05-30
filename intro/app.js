// d3.select('p')
//     .style('color', 'red');


d3.selectAll('p')
    .style('color', 'blue');




// link div to 'short hand'
const canvas = d3.select('.canvas');    

// add svg element
const svg = canvas.append('svg')
    .attr('width','500')
    .attr('height', '250');
    
// using this as a background    
svg.append('rect')
    .attr('width', '500')
    .attr('height', '250')
    .attr('fill', 'lightblue');

svg.append('circle')
    .attr('cx', 100)
    .attr('cy', 100)
    .attr('r', 80)
    .attr('fill', 'red');   

// line 
svg.append('line')
    .attr('x1', 100)
    .attr('x2', 50)
    .attr('y1', 240)
    .attr('y2', 50)
    .attr('stroke', 'yellow');

svg.append('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('x', 160)
    .attr('y', 100)
    .attr('fill', 'green')
    .attr('stroke', 'white')
    .attr('rx', 20);    


// numbers don't need to be in quotes but will still work.
// only strings.


// svg text!!

svg.append('text')
    .text('Hello there!')
    .attr('x', 100)
    .attr('y', 150)
    .attr('font-size', 40)
    .attr('fill', 'purple');

    