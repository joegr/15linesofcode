var t = 0;
function setup() {
  createCanvas(600, 600);
  noStroke();}
function draw() {
  background(250, 170, 140);
  fill(255, 245, 220, 220);
  ellipse(420, 170 + sin(t * 3) * 25, 110 + noise(t) * 20);
  for (var layer = 0; layer < 6; layer++) {
    fill(200 - layer * 33, 120 - layer * 18, 150 - layer * 18);
    beginShape();
    for (var x = 0; x <= width + 10; x += 10) vertex(x, 230 + layer * 65 + map(noise(x * .004 * (layer + 1), layer * 9 + t * (layer + 1)), 0, 1, -110, 110));
    vertex(width, height); vertex(0, height);
    endShape(CLOSE);}
  t += .004;}
