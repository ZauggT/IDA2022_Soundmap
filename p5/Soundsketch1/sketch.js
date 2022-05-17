let hand;
let song;

let sliderVolume;
let sliderPan;
let sliderRate;

let button;
let jumpButton;

let amp;

function setup() {
  createCanvas(windowWidth, windowHeight);

  song = loadSound("Sia_bird_Set_Free.mp3", loaded);

  ///- Sliders - ///
  sliderVolume = createSlider(0, 5, 1, 0.01);
  sliderVolume.position(300, 300);
  sliderPan = createSlider(-1, 1, 0, 0.01);
  sliderPan.position(200, 300);
  sliderRate = createSlider(0, 2, 1, 0.01);
  sliderRate.position(100, 300);

  ///- ADD Cue - ///
  song.addCue(2, changeBackground);

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
  let diam = map(vol, 0, 5, 50, 300);
  fill(255, 0, 255);
  ellipse(width / 2, height / 2, diam, diam);
}

function loaded() {
  ///- Buttons - ///
  button = createButton("play");

  button.mousePressed(togglePlaying);
  button.position(200, 200);
  button.size(50, 50);

  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong);

  console.log("loaded");
}
