const vollNote = [1, 1, 2, 0, 1, 1, 2, 0];
const halbNote = [0, 1, 0, 1, 0, 1, 0, 1];
const virtNote = [1, 2, 1, 2, 1, 2, 1, 2];
//   /$$   /$$ /$$$$$$$$ /$$$$$$$  /$$$$$$$$
// | $$  | $$| $$_____/| $$__  $$| $$_____/
// | $$  | $$| $$      | $$  \ $$| $$
// | $$$$$$$$| $$$$$   | $$$$$$$/| $$$$$
// | $$__  $$| $$__/   | $$__  $$| $$__/
// | $$  | $$| $$      | $$  \ $$| $$
// | $$  | $$| $$$$$$$$| $$  | $$| $$$$$$$$
// |__/  |__/|________/|__/  |__/|________/
// this will be used to stop the sound
const stopPattern = [0, 0, 0, 0, 0, 0, 0, 0];
// every sound has its own pattern
let goerpsPattern = [];
let schluckPattern = [];
let dosePattern = [];
/* 
set_pattern(goerpsPattern, vollNote);
set_pattern(schluckPattern, halbNote);
set_pattern(dosePattern, virtNote); */

set_pattern(goerpsPattern, stopPattern);
set_pattern(schluckPattern, stopPattern);
set_pattern(dosePattern, stopPattern);

//  /$$   /$$ /$$$$$$$$ /$$$$$$$  /$$$$$$$$
// | $$  | $$| $$_____/| $$__  $$| $$_____/
// | $$  | $$| $$      | $$  \ $$| $$
// | $$$$$$$$| $$$$$   | $$$$$$$/| $$$$$
// | $$__  $$| $$__/   | $$__  $$| $$__/
// | $$  | $$| $$      | $$  \ $$| $$
// | $$  | $$| $$$$$$$$| $$  | $$| $$$$$$$$
// |__/  |__/|________/|__/  |__/|________/
// a helper function to set the patterns of the sounds
function set_pattern(pattern, sound_pattern) {
  let index = 0;
  for (const node of sound_pattern) {
    pattern[index] = node;
    index++;
  }
}

console.log(goerpsPattern, schluckPattern, dosePattern);

let goerps, schluck, dose;
let button, button2, button3;
//   /$$   /$$ /$$$$$$$$ /$$$$$$$  /$$$$$$$$
// | $$  | $$| $$_____/| $$__  $$| $$_____/
// | $$  | $$| $$      | $$  \ $$| $$
// | $$$$$$$$| $$$$$   | $$$$$$$/| $$$$$
// | $$__  $$| $$__/   | $$__  $$| $$__/
// | $$  | $$| $$      | $$  \ $$| $$
// | $$  | $$| $$$$$$$$| $$  | $$| $$$$$$$$
// |__/  |__/|________/|__/  |__/|________/
// add some boolean logic for the buttons
let goerpsPlay = true;
let schluckPlay = true;
let dosePlay = true;
let part;
let vollPhrase, halbPhrase, viertPhrase;

function preload() {
  goerps = loadSound("sounds/halb-goerps.mp3");
  schluck = loadSound("sounds/ganz-schluck.mp3");
  dose = loadSound("sounds/achtel-Bierdose.mp3");
}

function setup() {
  button = createButton("play goerps");
  button.addClass("button");
  button.mousePressed(togglePlaying);
  button2 = createButton("play schlucks");
  button2.mousePressed(togglePlaying2);
  button3 = createButton("play dose");
  button3.mousePressed(togglePlaying3);

  //   /$$   /$$ /$$$$$$$$ /$$$$$$$  /$$$$$$$$
  // | $$  | $$| $$_____/| $$__  $$| $$_____/
  // | $$  | $$| $$      | $$  \ $$| $$
  // | $$$$$$$$| $$$$$   | $$$$$$$/| $$$$$
  // | $$__  $$| $$__/   | $$__  $$| $$__/
  // | $$  | $$| $$      | $$  \ $$| $$
  // | $$  | $$| $$$$$$$$| $$  | $$| $$$$$$$$
  // |__/  |__/|________/|__/  |__/|________/
  // assign the correct pattern
  // and change how you call the phrase
  vollPhrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps.rate(playbackRate);
      goerps.play(time);
    },
    goerpsPattern
  );
  halbPhrase = new p5.Phrase(
    "schluck",
    (time, playbackRate) => {
      schluck.rate(playbackRate);
      schluck.play(time);
    },
    schluckPattern
  );
  viertPhrase = new p5.Phrase(
    "dose",
    (time, playbackRate) => {
      dose.rate(playbackRate);
      dose.play(time);
    },
    dosePattern
  );

  part = new p5.Part();
  part.addPhrase(vollPhrase);
  part.addPhrase(halbPhrase);
  part.addPhrase(viertPhrase);

  part.setBPM(50);
  part.loop();
}

//  /$$   /$$ /$$$$$$$$ /$$$$$$$  /$$$$$$$$
// | $$  | $$| $$_____/| $$__  $$| $$_____/
// | $$  | $$| $$      | $$  \ $$| $$
// | $$$$$$$$| $$$$$   | $$$$$$$/| $$$$$
// | $$__  $$| $$__/   | $$__  $$| $$__/
// | $$  | $$| $$      | $$  \ $$| $$
// | $$  | $$| $$$$$$$$| $$  | $$| $$$$$$$$
// |__/  |__/|________/|__/  |__/|________/
// set the button to play or stop the sound
function togglePlaying() {
  // flip from true to false and vice versa
  goerpsPlay = !goerpsPlay;
  if (goerpsPlay == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern, vollNote);
  }
}
function togglePlaying2() {
  // flip from true to false and vice versa
  schluckPlay = !schluckPlay;
  if (schluckPlay == true) {
    set_pattern(schluckPattern, stopPattern);
  } else {
    set_pattern(schluckPattern, halbNote);
  }
}
function togglePlaying3() {
  // flip from true to false and vice versa
  dosePlay = !dosePlay;
  if (dosePlay == true) {
    set_pattern(dosePattern, stopPattern);
  } else {
    set_pattern(dosePattern, virtNote);
  }
}

function draw() {}

function recSound() {}

function startRec() {}

function mousePressed() {}

function windowResized() {}
