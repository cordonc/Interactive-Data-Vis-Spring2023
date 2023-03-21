
/* CONSTANTS AND GLOBALS */
// const width = ;
// const height = ;

/* LOAD DATA */
d3.csv('roster.csv', d3.autoType)
  .then(data => {
    //parsing data -> changing csv to an array
    console.log("data", data)

    /* SCALES */
    /** This is where you should define your scales from data to pixel space */
    
   
    /* HTML ELEMENTS */
    /** Select your container and append the visual elements to it */

     //select container
     const table = d3.select("#container")
     .append("table")

     table.append("thead")

     table.append("tbody")
       .append("tr")
       .attr('class', 'row')

     console.log('container', container)

     // append table
     // append table head
     // append table body

     // use d3 to populate table
     //tbody.selectAll(".student") specifically elements to the student class

     tbody.selectAll("tr")
      .data(roster)
      .join("tr")
      .attr("class", "student")
      // assign id
      .attr("id", data => data.Last) // can't just write data.Last, needs to be a function.
      .append("td") //can now manipulate table data to each cell
      .text(data => data.Last)

      //break the chain
      // ad cell for first name to row
      row.append("td")
        .text(data => data.First)

        // add cell for the last name to row
        row
          .append("td")
          .text(data => data.Last)
      



  })