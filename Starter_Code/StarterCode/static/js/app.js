// URL for the samples.json file
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Hold the data from JSON file
let allData;

// Fetch the JSON data only once and store it
d3.json(url).then(function (data) {
    // Store the data for later use
    allData = data;

    // Populate the dropdown for the first time
    initializeDropdown(data.names);

    // Initialize the charts with the first individual's data
    optionChanged("940");
});

function initializeDropdown(names) {
    // Select the dropdown menu
    let dropdown = d3.select("#selDataset");

    // Append the IDs to the dropdown menu
    names.forEach(id => {
        dropdown.append("option").text(id).property("value", id);
    });
}

function optionChanged(selectedID) {
    console.log("Selected ID", selectedID);

    // Find the new individual's sample and metadata using the selected ID
    let individualSample = allData.samples.find(sample => sample.id === selectedID);
    let individualMetaData = allData.metadata.find(meta => meta.id === Number(selectedID));

    // Check if individual data exists
    if (individualSample && individualMetaData) {
        BarChart(individualSample);
        BubbleChart(individualSample)
        MetaData(individualMetaData);
    } else {
        console.error('No data found for the selected ID:', selectedID);
    }
}
