// Import the data from data.js
const tableDate = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Build the table
function buildTable (data) {
    // clear out any exisiting data
    tbody.html("");
    // Loop through each object in the data and append a row and cells for each value in the rows
    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add each value as a table cell (td)
        Object.values(dataRow).forEach((val) =>{
            let cell = row.append("td");
            cell.text(val);
            }   
        );
    });
}
