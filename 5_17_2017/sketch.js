var bookcase = [];
function setup() {
  createCanvas(600,600);
  for(var i=0; i<7; i++) {
    bookcase.push(new bookshelf());
      for(var p = 0; p<20; p++) {
        bookcase[i].books.push(new book());}}}
function draw() {
  background(0);
  for(var i=0; i<bookcase.length; i++) {
    for(var p=0; p<bookcase[i].books.length; p++)
    bookcase[i].books[p].show();}
  frameRate(5);}
function bookshelf(){
  this.books = [];}
function book() {
  this.show = function() {
    fill(random(0,255),random(0,255),random(0,255));
    rect(floor(random(0,30))*20, (floor(random(0,6))*100), random(0,50), floor(random(0,20))*5);}}
