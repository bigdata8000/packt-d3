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

        // x-axis, scale band
        const x = d3.scaleBand()
            .domain(data.map(item => item.fill))
            .range([0, 500])
            .paddingInner(0.1)

        rect.data(data)
            .enter().append('rect')
            .attr('width', x.bandwidth)
            .attr('height', (d, i) => y(d.height))
            .attr('fill', (d) => d.fill)
            .attr('x', (d, i) => x(d.fill))        
       

    });




