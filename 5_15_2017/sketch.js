var progressX = 200;
var progressY = 200;

function setup() {
  createCanvas(600, 600);
}

function draw()  {
  background(95, 2, 31);
  arc(600,600,280,280,PI,TWO_PI);
    function growEllipse() {
      ellipse(30, 30, progressY, progressX);
      fill(random(225,255),random(144,255),0);
        for (var y = 0; y < 100; y++) {
          var x = randomGaussian(50,15);
          line(0, y, progressX, progressY);
        }
      progressX = progressX + .8;
      progressY = progressY + .8;

      }
  growEllipse();
}
