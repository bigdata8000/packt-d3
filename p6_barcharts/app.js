// console.log('working!!!');

const canvas = d3.select('.canva');

// add an svg element
const svg = canvas.append('svg')
    .attr('width', 600)
    .attr('height', 600);

// variables    
const margin = {top: 20, right: 20, bottom: 70, left: 70};    
const graphWidth = 600 - margin.left - margin.right;
const graphHeight = 600 - margin.top - margin.bottom;

const graph = svg.append('g')  //creating a group
    .attr('width', graphWidth)
    .attr('height', graphHeight)
    .attr('transform', `translate(${margin.left}, ${margin.top})`);


const rect = graph.selectAll('rect');   // all rectangles are inside the graph!!!

// create axes group
const xAxisGroup = graph.append('g')
    .attr('transform', `translate(0, ${graphHeight})`);
const yAxisGroup = graph.append('g');



d3.json('text.json')
    .then(data => {

        // linear scale, ie ratio
        const y = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.height)])
            .range([graphHeight, 0]);

        // x-axis, scale band
        const x = d3.scaleBand()
            .domain(data.map(item => item.fill))
            .range([0, 500])
            .paddingInner(0.1);

        // draw the scales then the data !!!
        const xAxis = d3.axisBottom(x);
        const yAxis = d3.axisLeft(y);

        xAxisGroup.call(xAxis);
        yAxisGroup.call(yAxis);

        rect.data(data)
            .enter().append('rect')
            .transition()
                .attr('y', d => y(d.height))
                .delay(function(d, i) {
                    return i * 100;
                })
            .attr('width', x.bandwidth)
            .attr('height', (d, i) => graphHeight - y(d.height))
            .attr('fill', (d) => d.fill)
            .attr('x', (d, i) => x(d.fill))
            //.attr('y', d => y(d.height))        // start to draw each bar from 0,0
            .on('mouseover', function(d, i, n){
                d3.select(n[i])
                    .transition()
                    .duration(100)
                    .style('opacity', 0.7)
            })
            .on('mouseout', function(d, i, n){
                d3.select(n[i])
                    .transition()
                    .duration(100)
                    .style('opacity', 1)
            })



    });




