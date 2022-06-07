let hand;

let sliderVolume;
let sliderPan;
let sliderRate;

let button;
let jumpButton;

let amp;

function setup() {
  createCanvas(200, 200);

  song = loadSound("Sia_bird_Set_Free.mp3", loaded);

  ///- Sliders - ///
  sliderVolume = createSlider(0, 1, 0.5, 0.01);
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
  background("black");
  //background(int(song.currentTime()), 0, 255);

  song.setVolume(sliderVolume.value());
  song.pan(sliderPan.value());
  song.rate(sliderRate.value());

  /*   if (song.currentTime() > 5) {
    background("red");
  } */
  //console.log(song.currentTime());

  let vol = amp.getLevel();
  let diam = map(vol, 0, 1, 10, 400);
  fill(255, 0, 255);
  ellipse(width / 2, height / 2, diam*2, diam*2);
}

function loaded() {
  ///- Buttons - ///
  button = createButton("play");
  button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);

  console.log("loaded");
}
