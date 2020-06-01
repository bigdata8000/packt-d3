// console.log('working!!!');

const canvas = d3.select('.canva');

// add an svg element
const svg = canvas.append('svg')
    .attr('width', 600)
    .attr('height', 600);


const rect = svg.selectAll('rect');

d3.json('text.json')
    .then(data => {

        rect.data(data)
            .enter().append('rect')
            .attr('width', (d, i) => d.width)
            .attr('height', (d, i) => d.height)
            .attr('fill', (d, i) => d.fill)
            .attr('x', (d, i) => i*26)
            

    });
