let hand;

let sliderVolume;
let sliderPan;
let sliderRate;

let button;
let jumpButton;

let amp;

let buttons = [];

function preload() {
  song = loadSound("assets/Sia_bird_Set_Free.mp3", loaded);
  song2 = loadSound("assets/hand.mp3", loaded);
}

function loaded() {
  buttons.push(new Button(150, 200, song));
  buttons.push(new Button(250, 200, song2));
  ///- Buttons - ///
  button = createButton("play");
  button.mousePressed(togglePlaying);
  button.position(100, 300);
  button.size(50, 50);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);

  console.log("loaded");
}

function setup() {
  createCanvas(500, 500);

  //song = loadSound("assets/Sia_bird_Set_Free.mp3", loaded);

  ///- Sliders - ///
  sliderVolume = createSlider(0, 5, 1, 0.01);
  sliderPan = createSlider(-1, 1, 0, 0.01);
  sliderRate = createSlider(0, 2, 1, 0.01);

  ///- ADD Cue - ///
  //song.addCue(2, changeBackground);

  ///- Amplitude - ///
  amp = new p5.Amplitude();
}

function togglePlaying() {
  if (!song.isPlaying()) {
    song.play();
    //button.html("pause");

    button.html("stop");
  } else {
    song.stop();

    //song.pause();
    button.html("play");
  }
}

function jumpSong() {
  let len = song.duration();
  let t = random(len);
  song.jump(t);
}

function changeBackground() {
  background(random(255), random(255), random(255));
}

function draw() {
  background("white");
  //background(int(song.currentTime()), 0, 255);

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].display();
  }

  song.setVolume(sliderVolume.value());
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());

  /*   if (song.currentTime() > 5) {
    background("red");
  } */
  //console.log(song.currentTime());

  let vol = amp.getLevel();
  let diam = map(vol, 0, 5, 50, 300);
  fill(255, 0, 255);
  ellipse(width / 2, height / 2, diam, diam);
}

function mousePressed() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].click();
  }
}

class Button {
  constructor(x, y, song) {
    this.position = { x: x, y: y };
    this.song = song;
    this.buttonSize = 50;
    this.isPressed = false;
  }

  display() {
    if (this.isPressed == false) {
      fill("white");
    } else {
      fill("green");
    }

    ellipse(this.position.x, this.position.y, this.buttonSize);

    fill("black");
    textAlign(CENTER, CENTER);
    if (this.isPressed == false) {
      text("OFF", this.position.x, this.position.y);
    } else {
      text("ON", this.position.x, this.position.y);
    }
  }

  click() {
    const distance = dist(mouseX, mouseY, this.position.x, this.position.y);
    if (distance <= this.buttonSize / 2) {
      this.switch();
    }
  }

  switch() {
    if (!this.isPressed) {
      this.song.play();
      this.isPressed = true;
    } else {
      this.song.pause();
      this.isPressed = false;
    }
  }
}

/* let col = color(25, 23, 200, 50);
let button = createButton('button');
button.style('background-color', col);
button.position(0, 0); */
