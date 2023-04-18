/**
 * CONSTANTS AND GLOBALS
 * */



/**
* APPLICATION STATE
* */
let svg;
let state = {
    geojson : [],
    hover: {
		latitude: null,
		longitude: null,
		state: null,
    }
};

/**
* LOAD DATA
* Using a Promise.all([]), we can load more than one dataset at a time
* */
Promise.all([
 d3.json("../data/usState.json")
]).then(([geojson]) => {
 state.geojson = geojson;
 // console.log("state: ", state);
 init();
});

/**
* INITIALIZING FUNCTION
* this will be run *one time* when the data finishes loading in
* */
function init() {
    svg.d3.select("#container")
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    // .style("background-color", "aqua")

//create projection
    const projection = d3.geoAlbersUsa().fitSize(
        [width, height], state.geojson)
    }
//create Geopath
    const projection = d3.geoPath(projection)

//create color on hovering of state
 svg.selectAll(".state")
	.data(geojson.features)
	.join("path")
	.attr("class", "state") // remember I am the 4th jonas brother!!
	.attr("d", d => geopath(d)) //what is generating our path? g e o p a t h
	.attr("fill", "transparent")
	.on("mouseover", (event, d) => {
			console.log('event', event)
})

 draw(); // calls the draw function


/**
* DRAW FUNCTION
* we call this every time there is an update to the data/state
* */

function draw() {
        const hoverBox = d3.select("#hover-content")
        
        console.log('hover data', state.hover)
        
        const hoverData = Object.entries(state.hover)
            console.log('hoverData', hoverData)
    
        hoverBox.selectAll("div.row")
            .data(hoverData)
            .join("div")
            .attr("class", "row") //join on div, assign on class row
            .html( d => d )
 

}