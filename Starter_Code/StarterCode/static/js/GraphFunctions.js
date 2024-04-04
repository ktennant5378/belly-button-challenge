function BubbleChart(individual) {
    // Create a bubble chart for Patient 0
    let bubbleTitle = `Bubble`;

    // Create the trace for the bubble plot
    let BubbleTrace = {
        x: individual.otu_ids,
        y: individual.sample_values,
        mode: 'markers',
        marker: {
            size: individual.sample_values,
            color: individual.otu_ids
        },
        text: individual.otu_labels
    };

    // Create the data array for the plot
    let BubbleData = [BubbleTrace];

    let BubbleLayout = {
        title: bubbleTitle,
        showlegend: false,
        height: 600,
        width: 1200
    };

    Plotly.newPlot("bubble", BubbleData, BubbleLayout);
}

function BarChart(individual) {
    // Sort the data by sample values and console log it
    individual.sample_values.sort((a, b) => b - a);

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

    // Create a horizontal bar chart for Patient 0
    let title = "Bar";

    // Trace1 for the OTU Data
    let trace1 = {
        x: sample_values,
        y: otu_ids,
        type: "bar",
        orientation: "h",
    };

    // Plug the data into the Plotly function
    let BarTrace = [trace1];

    let layout = {
        title: title
    };

    Plotly.newPlot("bar", BarTrace, layout);
}

function MetaData(individualMetaData) {
    // Create variables to hold the ID, ethnicity, gender, age, location, bbtype, wfreq
    let metadata = individualMetaData.metadata;

    // Select the metadata element
    let metadataElement = d3.select("#sample-metadata");

    // Clear the metadata
    metadataElement.html("");

    // Create variables to hold ethnicity, gender, age, location, bbtype, wfreq
    let id = individualMetaData.id;
    let ethnicity = individualMetaData.ethnicity;
    let gender = individualMetaData.gender;
    let age = individualMetaData.age;
    let location = individualMetaData.location;
    let bbtype = individualMetaData.bbtype;
    let wfreq = individualMetaData.wfreq;

    // // Append the metadata to the panel
    metadataElement.append("p").text(`id: ${id}`);
    metadataElement.append("p").text(`ethnicity: ${ethnicity}`);
    metadataElement.append("p").text(`gender: ${gender}`);
    metadataElement.append("p").text(`age: ${age}`);
    metadataElement.append("p").text(`location: ${location}`);
    metadataElement.append("p").text(`bbtype: ${bbtype}`);
    metadataElement.append("p").text(`wfreq: ${wfreq}`);
}