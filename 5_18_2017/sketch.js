var yperl = 0.0;
function setup() {
  createCanvas(600, 600);}
function draw() {
  background(238,130,238);
  fill(noise(yperl)*400,noise(yperl)*180,0);
  noStroke();
  ellipse(width/2,((height/2)-100),250,250);
  fill(noise(yperl)*300,noise(yperl)*100,noise(yperl)*400);
  beginShape();
  var xperl = 0;
  for (var x = 0; x <= width; x += 10) {
    var y = map(noise(xperl, yperl), 0, 1, 200,300);
    vertex(x, y);
    xperl += .05;}
  yperl += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);}
