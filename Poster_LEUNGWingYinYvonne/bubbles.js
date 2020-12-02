class bubbles {

  constructor(d) {
    this.x = random(10, width -10);
    this.y = height + random(10, 80);
    this.d = d;
    this.dc = random(-62, 62);
    this.life = 255;
  }

  ascent() {
    noStroke();
    fill(245, 193, 220, this.life);
    ellipse(this.x, this.y, this.d + 5 + this.dc, this.d + 5 + this.dc);
    fill(255, this.life);
    ellipse(this.x, this.y, this.d + this.dc, this.d + this.dc);
    this.y -= 10;
    this.life -= 2;
    if (this.y < height/3*2) {
      this.y = height + random(5, 80);
      this.x = random(0, width);
      this.life = 255;
    }
  }
}
