const defaultInputData = [
    {"type": "square", "width": 200, "height": 100, "x": 20, "y": 30, "anchor": "center", "color": "black"},
    {"type": "square", "width": 100, "height": 50, "x": -20, "y": -30, "anchor": "center", "color": "blue"},
];


function loadDefaultInputData(targetId) {
    const val = JSON.stringify(defaultInputData);
    document.getElementById(targetId).value = val;
}
