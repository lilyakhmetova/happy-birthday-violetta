function setup() {
    let myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent("canvas");
    background(0);
}

function confetti() {
  fill('#fae');
  ellipse(random(0, width), random(0, width), 30, 30);

  fill('#ADFF2F');
  ellipse(random(0, width), random(0, width), 30, 30);

  fill('#87CEEB');
  ellipse(random(0, width), random(0, width), 30, 30);
}

function draw() {
  setTimeout(confetti, 4000);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
