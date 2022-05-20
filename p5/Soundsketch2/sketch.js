bkgdColor = "blue";
let buttons = [];
let x = 0;
let y = 0;

let soundFiles = [
  "sounds/hand.mp3",
  "sounds/Sia_Bird_Set_Free.mp3",
  "sounds/Miles_Davis_Bird_of_Paradise.mp3",
  "sounds/Passenger_Bird_in_Flight.mp3",
  "sounds/Eminem_Crack_A_Bottle.mp3",
  "sounds/hand.mp3",
  "sounds/Bier-ganz-Balz.mp3",
  "sounds/Bier-ganz-Tim.mp3",
  "sounds/Chips-kauen.mp3",
  "sounds/Energy-Drink-schlucken.mp3",
  "sounds/Goerps1.mp3",
  "sounds/Goerps2.mp3",
  "sounds/Goerps3.mp3",
  "sounds/Goerps4.mp3",
  "sounds/Goerps5.mp3",
  "sounds/Goerps6.mp3",
  "sounds/Gurke-kauen.mp3",
  "sounds/Knack_1.mp3",
  "sounds/Knacks_2.mp3",
  "sounds/Knacks_3.mp3",
  "sounds/Knacks_4.mp3",
  "sounds/Knacks_5.mp3",
  "sounds/Knacks_6.mp3",
  "sounds/Knacks_7.mp3",
  "sounds/Knacks_8.mp3",
  "sounds/Knacks_9.mp3",
  "sounds/Knacks_10.mp3",
  "sounds/Salat-kauen.mp3",
  "sounds/Snackruebli-kauen.mp3",
  "sounds/tief-gsi-du.mp3",
  "sounds/Wasser-schlucken-Balz.mp3",
  "sounds/Wasser-schlucken-Tim.mp3",
];
let songs = [];

function preload() {
  for (let i = 0; i < soundFiles.length; i++) {
    songs[i] = loadSound(soundFiles[i]);
  }
}

function setup() {
  //createCanvas(windowWidth, windowHeight);

  //background("blue");
  rectMode(CENTER);

  /// raster buttons mit verschiedenen songs ///
  for (let i = 0; i < soundFiles.length; i++) {
    let left = 100;
    let top = 90;
    let xAbstand = 90;
    let moduloCoeff = 4;
    let x = i % moduloCoeff; // 0,1,2,0,1,2,0,1,2  -> X koordinate

    if (i % moduloCoeff == 0) {
      y = y + top;
    }

    buttons.push(new Button(left + x * xAbstand, y + top, songs[i]));
  }

  sliderVolume = createSlider(0, 1, 0.5, 0.01);
  sliderVolume.addClass("mySliders");
  amp = new p5.Amplitude();
  fft = new p5.FFT();
}

function draw() {
  createCanvas(windowWidth, windowHeight - 80);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].display();
  }
  outputVolume(sliderVolume.value());
  ////---Volume of all Songs in the sketch---////
  sliderVolume.position(
    width / 2 - sliderVolume.width / 2,
    height - height / 10
  );

  //text("🔊", width / 2, height - 100);
  let vol = amp.getLevel();
  let diam = map(vol, 0, 0.5, 50, 300);
  strokeWeight(5);

  let barHeight = height - height / 6;
  let barAbstand = 30;

  /*   line(width, barHeight - barAbstand, diam / 1.5, barHeight - barAbstand);
  line(0, barHeight, diam, barHeight);
  line(0, barHeight + barAbstand, diam / 2, barHeight + barAbstand); */

  line(
    width,
    barHeight - barAbstand,
    width - diam / 1.5,
    barHeight - barAbstand
  );
  line(width, barHeight, width - diam, barHeight);
  line(width, barHeight + barAbstand, width - diam / 2, barHeight + barAbstand);

  ellipse(width / 2, height / 2, diam, diam);

  //console.log(vol);

  let spectrum = fft.analyze();
  //console.log(spectrum);
  noStroke();
  fill(207, 137, 85);
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(20);
  for (let i = 0; i < waveform.length; i++) {
    let x = map(i, 0, waveform.length, 0, width);
    let y = map(waveform[i], -1, 1, 0, height);
    vertex(x, y);
    //console.log(x);
  }
  endShape();
}

function mousePressed() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].click();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
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
      fill(129, 212, 136);
    }
    strokeWeight(0);
    rect(this.position.x, this.position.y, this.buttonSize);

    fill("black");
    textFont("Arial");
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
      this.song.loop();
      this.isPressed = true;
    } else {
      this.song.stop();
      this.isPressed = false;
    }
  }
}
