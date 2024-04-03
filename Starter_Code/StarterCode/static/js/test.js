





// Slice the first 10 objects for plotting
var slicedData = sortedData.slice(0, 10);




// Reverse the array to accommodate Plotly's defaults
var reversedData = slicedData.reverse();

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual
let title = "Top 10 OTUs Found in Individual";
// Trace1 for the OTU Data
let trace1 = {
    x: sample_values,
    y: otu_ids,
    type: "bar",
    orientation: "h",
    text: otu_labels
};
// Plug the data into the Plotly function
let d = [trace1];

let layout = {
    title: title
};

Plotly.newPlot("bar", d, layout);
