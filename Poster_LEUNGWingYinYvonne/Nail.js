class Nail {

  constructor(x, y, xs, ys, no) {
    this.x = x;
    this.y = y;
    this.xs = xs;
    this.ys = ys;
    this.no = no;
  }

  display(px, py) {
    if (px > this.x - this.xs && px < this.x + this.xs && py > this.y - this.ys && py < this.y + this.ys) {
      image(img2[this.no], this.x, this.y - 15, img2[this.no].width*4, img2[this.no].height*4);
    } else {
      image(img2[this.no], this.x, this.y, img2[this.no].width*4, img2[this.no].height*4);
    }
  }

  clicked(px, py) {
    var CaseChange = false;
    if (mouseIsPressed) {
      if (px > this.x - this.xs && px < this.x + this.xs && py > this.y - this.ys && py < this.y + this.ys) {
        CaseChange = true;
        Change = false;
        changeSE.play();
      }
    }
    return CaseChange;
  }
}

//OpenProcessing
//Megan McGlynn Prism
//https://www.openprocessing.org/sketch/677856
function Prism(px, py) {
  var y = random(width);
  noStroke();
  background(123, 119, 234, 1);
  stroke(220, 80);
  line(px, py, y, height-600);
  line(px, py, y, 100);
  noStroke();
  fill(random(200, 250), 8);
  triangle(px, py, py, height-600, py, 100);
  if (frameCount > 20) {
    background(187, 232, 143, 3);
  }
  if (frameCount > 300) {
    background(123, 119, 234, 1, 3);
  }
  if (frameCount > 400) {
    background(50, 162, 216, 1, 3);
  }
}

function Prism2(px, py) {
  var y = random(width);
  noStroke();
  background(255, 77, 125, 1);
  stroke(220, 80);
  line(px, py, y, height-400);
  line(px, py, y, 100);
  noStroke();
  fill(random(200, 250), 8);
  triangle(px, py, py, height-400, py, 100);
  if (frameCount > 20) {
    background(255, 196, 255, 3);
  }
  if (frameCount > 300) {
    background(255, 77, 110, 1, 3);
  }
}
//Generative Gestaltung – Creative Coding im Web
//P_2_1_2_04 Joey Lee and Niels Poldervaart
//https://editor.p5js.org/generative-design/sketches/P_2_1_2_04
var tileCount = 20;
var actRandomSeed = 0;
var rectSize = 30;

function Tile () {
  noStroke();
  clear();
  randomSeed(actRandomSeed);
  background(250);

  for (var gridY = 0; gridY < tileCount; gridY++) {
    for (var gridX = 0; gridX < tileCount; gridX++) {

      var posX = width / tileCount * gridX;
      var posY = height / tileCount * gridY;

      var shiftX1 = mouseX / 12 * random(-1, 1);
      var shiftY1 = mouseY / 12 * random(-1, 1);
      var shiftX2 = mouseX / 12 * random(-1, 1);
      var shiftY2 = mouseY / 12 * random(-1, 1);
      var shiftX3 = mouseX / 12 * random(-1, 1);
      var shiftY3 = mouseY / 12 * random(-1, 1);
      var shiftX4 = mouseX / 12 * random(-1, 1);
      var shiftY4 = mouseY / 12 * random(-1, 1);

      push();
      translate(posX, posY);
      beginShape();
      vertex(shiftX1, shiftY1);
      vertex(rectSize + shiftX2, shiftY2);
      vertex(rectSize + shiftX3, rectSize + shiftY3);
      vertex(shiftX4, rectSize + shiftY4);
      endShape();
      pop();
    }
  }
}
