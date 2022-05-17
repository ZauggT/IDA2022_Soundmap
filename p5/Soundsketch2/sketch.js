bkgdColor = 255;
let buttons = [];
let songs = [];

function preload() {
  song1 = loadSound("sounds/hand.mp3");
  song2 = loadSound("sounds/Sia_Bird_Set_Free.mp3");
  song3 = loadSound("sounds/Miles_Davis_Bird_of_Paradise.mp3");
}

function setup() {
  background(bkgdColor);
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  buttons.push(new Button(200, 200, song1));
  buttons.push(new Button(300, 200, song2));
  buttons.push(new Button(400, 200, song3));
  /*   for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      let x = map(col, 0, numCols, 25, width);
      let y = map(row, 0, numRows, 25, height);
      buttons.push(new Button(x, y, song2));
      buttons.push(new Button(x + 50, y, song1));
      console.log("row", row);
      console.log("col", col);
    }
  } */

  sliderVolume = createSlider(0, 3, 1, 0.02);
  sliderVolume.position(300, 300);
}

function draw() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].display();
  }
  ////---Volume of all Songs in the sketch---////
  outputVolume(sliderVolume.value());
}

function mousePressed() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].click();
  }
}
/////--CLASS---////
class Button {
  constructor(x, y, song) {
    this.position = { x: x, y: y };
    this.song = song;
    this.buttonSize = 80;
    this.isPressed = false;
  }

  display() {
    if (this.isPressed == false) {
      fill("white");
    } else {
      fill("green");
    }

    rect(this.position.x, this.position.y, this.buttonSize);

    fill("black");
    textAlign(CENTER, CENTER);
    if (this.isPressed == false) {
      text("OFF", this.position.x, this.position.y);
    } else {
      text("ON", this.position.x, this.position.y);
    }
  }

  click() {
    let distance = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (distance <= this.buttonSize / 2) {
      this.switch();
    }
  }

  switch() {
    if (!this.isPressed) {
      this.song.play();
      this.isPressed = true;
    } else {
      this.song.stop();
      this.isPressed = false;
    }
  }
}
