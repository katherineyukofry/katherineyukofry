function setup() {
  createCanvas(600, 500);
  background(200);
}

function draw() {
  //rectange
  fill(0,153,0);
  rect(200,200,300,100);
  //circles 1 and 2
  strokeWeight(0);
  ellipse(330,300,200,100);
  ellipse(440,200,200,100);
  //Sea Island Circle
  strokeWeight(0.5);
  ellipse(140,160,130,100);
}