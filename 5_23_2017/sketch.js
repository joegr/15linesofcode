var l = new flower();

function setup() {
  createCanvas(600, 600);

}

function draw() {
  background(0);
  l.show();
  frameRate(12);
}

function flower() {
  this.show = function() {
    noStroke();
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(width/2, height/2, randomGaussian(0, 200));
    fill(random(0,255),random(0,255),random(0,255));
    ellipse(width/2, height/2, randomGaussian(50, 100));
    this.r = this.r + randomGaussian(-15,2000);
  };
}
