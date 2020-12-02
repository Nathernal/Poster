var nail = [];
var Bubble = [];

var nailx = 65;
var nailNo = 4;
var m = 0;
var Change = false;
var movex = 0;

var img1 = [];
var img2 = [];
var img3 = [];
var all;
var fontName, fontIntro;

function preload() {
  var nailc = 1;
  for (var i = 0; i < 4; i++) {
    img1[i] = loadImage('images/N3' + nailc + 'B.png');
    img2[i] = loadImage('images/N3' + nailc + 'N.png');
    nailc +=1;
  }
  for (i = 0; i < 2; i++) {
    img3[i] = loadImage('images/cloud' + i + '.png');
  }
  all = loadImage('images/ALLB.png');
  bg = loadImage('images/bg.png');
  fontName = loadFont("Bungasai.ttf");
  fontIntro = loadFont("PopRumCute.otf");
  changeSE = loadSound("/sound/change.mp3");
  BGMusic = loadSound("/sound/i_remember_you.mp3");
}

function setup() {
  createCanvas(2480, 3508);
  CoverCanvas = createGraphics(2480, 3508);
  CoverCanvas.clear();
  imageMode(CENTER);
  frameRate(15);
  changeSE.setVolume(0.5);
  changeSE.rate(1.5);
  for (var i = 0; i < 4; i++) {
    var dx = 450;
    nailx = nailx + dx;
    nail[i] = new Nail(nailx, height/3*2 - 80, 80, 160, i);
  }
  for (i = 0; i < 8; i++) {
    Bubble[i] = new bubbles(8);
  }
  BGMusic.play();
  BGMusic.loop();
  BGMusic.setVolume(0.45);
}

function draw() {
  switch (nailNo) {
  case 0:
    if (Change == false) {
      Change = true;
      m = 0;
    }
    Prism2(mouseX, mouseY);
    if (m < 120) {
      m+= 30;
      background(247, 50, 132);
    }
    image(img1[0], width/2 -60, height/3.2 +m, img1[0].width*4, img1[0].height*4);
    break;
  case 1:
    if (Change == false) {
      Change = true;
      m = 0;
    }
    fill(255, 155, 208, 80);
    Tile();
    image(img1[1], width/2 -60, height/3.2 +m, img1[1].width*4, img1[1].height*4);
    if (m < 120) {
      m+= 30;
    }
    break;
  case 2:
    if (Change == false) {
      Change = true;
      m = 0;
    }
    fill(192, 100, 64, 40);
    Tile();
    image(img1[2], width/2 -60, height/3.2 +m, img1[2].width*4, img1[2].height*4);
    if (m < 120) {
      m+= 30;
    }
    break;
  case 3:
    if (Change == false) {
      Change = true;
      m = 0;
    }
    Prism(mouseX, mouseY);

    if (m < 150) {
      m+= 30;
      background(50, 162, 216);
    }
    image(img1[3], width/2 -60, height/3.2 + m, img1[3].width*4, img1[3].height*4);
    break;
  case 4:
    if (Change == false) {
      Change = true;
      m = 0;
    }
    if (m < 150) {
      m+= 30;
    }
    background(250);
    movex = map(mouseX, 0, width, -20, 20);
    image(img3[1], width/2 + movex, height/2+10);
    image(img3[0], width/2 - movex, height/2+10);
    image(all, width/2 - 10, height/3 + m, all.width *3.8, all.height *3.8);
    break;
  }

  image(bg, width/2, height/2, 2480, 3508);
  for (var i = 0; i < Bubble.length; i++) {
    Bubble[i].ascent();
  }
  for (i = 0; i < 4; i++) {
    nail[i].display(mouseX, mouseY);
  }

  for (i = 0; i < 4; i++) {
    if (nail[i].clicked(mouseX, mouseY) == true) {
      nailNo = i;
    }
  }

  textFont(fontName);
  textSize(154);

  switch (nailNo) {
  case 0:
    fill(250, 116, 171);
    text('N31', width/6*5 - 85 , height/7*2 + 48);
    textFont(fontIntro);
    textSize(92);
    fill(255);
    text('N31', 185, height/9*7 + 110);
    text('ラブリーシャワー', 185 + 300, height/9*7 + 110);
    text('カシス色のベース×', 185, height/9*7 + 280);
    text('たっぷりゴールドラメ', 185, height/9*7 + 400);
    break;
  case 1:
    fill(255, 155, 208);
    text('N32', width/6*5 - 85 , height/7*2 + 48);
    textFont(fontIntro);
    textSize(92);
    fill(255);
    text('N32', 185, height/9*7 + 110);
    text('ミスティドリーム', 185 + 300, height/9*7 + 110);
    text('ブルーの偏光パールが輝き', 185, height/9*7 + 280);
    text('透明感のある指先に', 185, height/9*7 + 400);
    break;
  case 2:
    fill(236, 207, 203);
    text('N33', width/6*5 - 85 , height/7*2 + 48);
    textFont(fontIntro);
    textSize(92);
    fill(255);
    text('N33', 185, height/9*7 + 110);
    text('　ジュエリーシュガー', 185 + 300, height/9*7 + 110);
    text('シルバーとピンクのラメ', 185, height/9*7 + 280);
    text('で可愛らしい指先に', 185, height/9*7 + 400);
    break;
  case 3:
    fill(142, 197, 255);
    text('N34', width/6*5 - 85 , height/7*2 + 48);
    textFont(fontIntro);
    textSize(92);
    fill(255);
    text('N34', 185, height/9*7 + 110);
    text('　ファンタジースカイ', 185 + 300, height/9*7 + 110);
    text('ブルーのベース×', 185, height/9*7 + 280);
    text('パープルラメ', 185, height/9*7 + 400);
    break;
  case 4:
    textSize(119);
    fill(250, 136, 250);
    text('N31-34', width/6*5 - 128 , height/7*2 + 18);
    textFont(fontIntro);
    textSize(92);
    fill(255);
    text('指先に', 185, height/9*7 + 110);
    text('ゆめかわいいカラ', 185, height/9*7 + 280);
    text('ーを', 185, height/9*7 + 400);
    break;
  }
}
