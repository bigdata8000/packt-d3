


const canvas = d3.select(".canva");

var dataArray = [4, 15, 34, 70, 20];

// add svg element
const svg = canvas.append("svg")
    .attr("width", 300)
    .attr("height", 300);

const rect = svg.selectAll("rect")

rect.data(dataArray)                // first: pass dataArray
    .enter().append("rect")         // then, enter().append ie creates rectangles
    .attr("width", 24)
    .attr("fill", "orange")
    .attr("height", function(d) {
        return d*2;
    })
    .attr("x", function(d, i) {     // d = data, i = index
        return i*25;
    })
    .attr("y", function(d, i) {
        return 100 - (d * 2);
    })

    console.log(rect);

