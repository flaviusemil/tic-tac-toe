var canvas;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    canvas.position(x, y);
}

function setup() {
    canvas = createCanvas(600, 400);
    centerCanvas();
    background(153);

    line(0, 0, width, height);
}

function windowResized() {
    centerCanvas();
}