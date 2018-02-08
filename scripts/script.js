import p5 from 'p5.min'
import Page from './Page';

new p5();

let page = new Page(windowWidth, windowHeight);
console.log("Width: " + windowWidth);
console.log("Height: " + windowHeight);

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    background(56, 56, 56);
}

function drawHeader() {

}

function drawFooter() {

}

function draw() {
    console.log("test");
    textSize(48);
    text("Tic Tac Toe", windowWidth / 2 - 48 * 2, 80);
    fill(0, 102, 153, 51);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(56, 56, 56);
}