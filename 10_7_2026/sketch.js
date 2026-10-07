var words, red;
function setup() {
  createCanvas(600, 600); background(236, 228, 210); frameRate(4); noStroke(); red = color(215, 30, 30);
  words = (setup + draw).split(/[^A-Za-z]+/).filter(function(w) { return w.length > 2; });}
function draw() {
  translate(random(width), random(height));
  rotate(random([0, 0, HALF_PI, -QUARTER_PI, random(TWO_PI)]));
  var w = random(words).toUpperCase(), s = random([10, 16, 28, 54, 110]), ink = random([0, 0, red, 236]);
  if (random() < .12) { fill(random([red, 0])); return random() < .5 ? ellipse(0, 0, s * 3) : rect(-s * 4, 0, s * 8, s / 4); }
  if (random() < .03) { fill(236, 228, 210, 200); return rect(-width, -40, width * 2, 80); }
  textSize(s); textFont(random(['Georgia', 'Courier New', 'Impact', 'Arial Black', 'Times']));
  textStyle(random([NORMAL, BOLD, ITALIC]));
  fill(ink === 236 ? 0 : color(245, 240, 228)); rect(-5, -s, textWidth(w) + 10, s * 1.2);
  fill(ink); text(random() < .2 ? w.split('').reverse().join('') : w, 0, -s * .05);
  if (frameCount % 120 === 0) { fill(0); textSize(18); text('DADA ' + frameCount, -30, 30); }}
