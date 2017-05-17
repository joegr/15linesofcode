var rocks = [];
function setup() {
  createCanvas(600,600);
  for (var i=0; i<50; i++) {
    rocks.push(new rock());}}
function draw() {
  background(40, 40, 40);
  for (var i=0; i<rocks.length; i++) {
    rocks[i].showStalagStalac();
    rocks[i].extension = rocks[i].extension + random(.01,.3)}}
function rock() {
  this.base = random(40, 140);
  this.tip = random(0, 600);
  this.extension = random(0, 150);
    this.showStalagStalac = function() {
      fill(this.extension,this.extension,this.extension);
      triangle((this.tip - (this.base/2)), 600, this.tip, (600-this.extension), (this.tip + (this.base/2)), 600);
      triangle((this.tip - (this.base/2)), 0, this.tip, this.extension, (this.tip + (this.base/2)), 0);};}
