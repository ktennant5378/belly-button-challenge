
// Create a bubble chart for Patient 0
let title2 = "Bubble: Patient 0";

// Create the trace for the plot
let trace2 = {
    x: otu_ids,
    y: sample_values,
    marker_size: sample_values,
    type: "bubble",
    marker_color: otu_ids,
    text: otu_labels
}

// Create the data array for the plot
let BubbleTrace = trace2;

let layout2 = {
    title: title2
};

Plotly.newPlot("bubble", BubbleTrace, layout2);