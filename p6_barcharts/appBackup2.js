// console.log('working!!!');

const canvas = d3.select('.canva');

// add an svg element
const svg = canvas.append('svg')
    .attr('width', 600)
    .attr('height', 600);


const rect = svg.selectAll('rect');

d3.json('text.json')
    .then(data => {

        // linear scale, ie ratio
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.height)])
            .range([0, 500]);

        rect.data(data)
            .enter().append('rect')
            .attr('width', (d, i) => d.width)
            .attr('height', (d, i) => y(d.height))
            .attr('fill', (d) => d.fill)
            .attr('x', (d, i) => i*26)
            

    });




