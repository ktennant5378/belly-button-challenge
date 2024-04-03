// URL for the samples.json filesample_data
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Promise Pending
const dataPromise = d3.json(url);
console.log("Data Promise: ", dataPromise);

// Fetch the JSON data and console log it
d3.json(url).then(function (data) {
    console.log(data);
});











// Create variables to hold the OTU IDs, sample values, and labels
var sample_values = data.sample_values;
var otu_ids = data.otu_ids;
var otu_labels = data.otu_labels;

// Console log the data
console.log(sample_values);
console.log(otu_ids);
console.log(otu_labels);

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

Plotly.newPlot("plot", d, layout);
