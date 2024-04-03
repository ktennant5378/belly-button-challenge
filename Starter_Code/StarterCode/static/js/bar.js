// URL for the samples.json filesample_data
const url = "https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json";

// Fetch the JSON data and console log it
let thedata = d3.json(url).then(function (data) {
    console.log(data);

    // Slice to the first individual's data
    let individual = data.samples[0];
    console.log("Patient 0", individual);

    // Sort the data by sample values and console log it
    individual.sample_values.sort((a, b) => b - a);
    console.log("Sorted Patient 0", individual);

    // Slice the data to the top 10 samples_values and console log it
    let sortedIndividual = {
        otu_ids: individual.otu_ids.slice(0, 10),
        sample_values: individual.sample_values.slice(0, 10),
        otu_labels: individual.otu_labels.slice(0, 10)
    };

    // Create variables to hold the OTU IDs, sample values, and labels
    let sample_values = sortedIndividual.sample_values;
    let otu_ids = sortedIndividual.otu_ids.map(id => `OTU: ${id}`);
    let otu_labels = sortedIndividual.otu_labels;

    // Console log the data
    console.log("sample_values:", sample_values);
    console.log("otu_ids", otu_ids);
    console.log("otu_labels", otu_labels);

    // Create a horizontal bar chart for Patient 0
    let title = "Patient 0";

    // Trace1 for the OTU Data
    let trace1 = {
        x: sample_values,
        y: otu_ids,
        type: "bar",
        orientation: "h",
    };

    // Plug the data into the Plotly function
    let d = [trace1];

    let layout = {
        title: title
    };

    Plotly.newPlot("bar", d, layout);

});
