let vollNote = [1, 0, 0, 0, 1, 0, 0, 0];
let halbNote = [1, 0, 1, 0, 1, 0, 1, 0];
let virtNote = [1, 1, 1, 1, 1, 1, 1, 1];
let goerps, schluck, dose;
let button, button2, button3;

function preload() {
  goerps = loadSound("sounds/halb-goerps.mp3");
  schluck = loadSound("sounds/ganz-schluck.mp3");
  dose = loadSound("sounds/achtel-Bierdose.mp3");
}

function setup() {
  button = createButton("play");
  button.mousePressed(togglePlaying);
  button2 = createButton("play2");
  button2.mousePressed(togglePlaying2);
  button3 = createButton("play3");
  button3.mousePressed(togglePlaying);

  let vollPhrase = new p5.Phrase("goerps", togglePlaying, vollNote);
  let halbPhrase = new p5.Phrase("schluck", togglePlaying2, halbNote);
  myPart = new p5.Part();
  myPart.addPhrase(vollPhrase);
  myPart.addPhrase(halbPhrase);
  myPart.setBPM(60);
}

function togglePlaying(time, playbackRate) {
  if (!goerps.isPlaying()) {
    goerps.rate(playbackRate);
    goerps.loop(time);

    //button.html("pause");

    button.html("stop");
  } else {
    goerps.stop();

    //goerps.pause();
    button.html("play");
  }
}
function togglePlaying2(time, playbackRate) {
  if (!schluck.isPlaying()) {
    schluck.rate(playbackRate);
    schluck.loop(time);
    //button.html("pause");

    button2.html("stop");
  } else {
    schluck.stop();

    //goerps.pause();

    button2.html("play");
  }
}
function playMyPart() {
  userStartAudio();

  myPart.start();
}

function draw() {}

function recSound() {}

function startRec() {}

function mousePressed() {}

function windowResized() {}
