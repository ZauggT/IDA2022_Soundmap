bkgdColor = "blue";
let buttons = [];
let x = 0;
let y = 0;

/// kann man songs in ein array laden? ///
let soundFiles = [
  "sounds/hand.mp3",
  "sounds/Sia_Bird_Set_Free.mp3",
  "sounds/Miles_Davis_Bird_of_Paradise.mp3",
  "sounds/Passenger_Bird_in_Flight.mp3",
  "sounds/Eminem_Crack_A_Bottle.mp3",
];
let songs = [];

function preload() {
  for (let i = 0; i < soundFiles.length; i++) {
    songs[i] = loadSound(soundFiles[i]);
  }
}

function setup() {
  //createCanvas(windowWidth, windowHeight);
  createCanvas(600, 800);
  background("blue");
  rectMode(CENTER);

  /// raster buttons mit verschiedenen songs ///
  for (let i = 0; i < soundFiles.length; i++) {
    let offSetX = 50;
    let offSetY = 200;

    x = i * offSetX;
    y = 200;

    if (i % 3 == 0) {
      y = y + y;
    }
    buttons.push(new Button(x + 100, y, songs[i]));

    console.log("y", y);
    console.log("x", x);
  }

  sliderVolume = createSlider(0, 1, 0.5, 0.02);
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
