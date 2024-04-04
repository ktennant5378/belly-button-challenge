// URL for the samples.json filesample_data
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Fetch the JSON data and console log it
let thedata = d3.json(url).then(function (data) {
    console.log(data);

    // Extract the ID's from data and console log it
    let ids = data.names;
    console.log("IDs", ids);

    // Slice to the first individual's data
    let individual = data.samples[0];
    let individualMetaData = data.metadata[3];
    console.log("Patient 0", individual);


    BarChart(individual);
    BubbleChart(individual);
    MetaData(individualMetaData);

});