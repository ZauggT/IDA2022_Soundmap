const vollNote = [1, 0, 0, 0, 1, 0, 0, 0];
const halbNote = [1, 0, 1, 0, 1, 0, 1, 0];
const virtNote = [1, 1, 1, 1, 1, 1, 1, 1];

/// Step sequence//
const b1 = [1, 0, 0, 0, 0, 0, 0, 0];
const b2 = [0, 1, 0, 0, 0, 0, 0, 0];
const b3 = [0, 0, 1, 0, 0, 0, 0, 0];
const b4 = [0, 0, 0, 1, 0, 0, 0, 0];
const b5 = [0, 0, 0, 0, 1, 0, 0, 0];
const b6 = [0, 0, 0, 0, 0, 1, 0, 0];
const b7 = [0, 0, 0, 0, 0, 0, 1, 0];
const b8 = [0, 0, 0, 0, 0, 0, 0, 1];
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
let goerpsPattern1 = [];
let goerpsPattern2 = [];
let goerpsPattern3 = [];
let goerpsPattern4 = [];
let goerpsPattern5 = [];
let goerpsPattern6 = [];
let goerpsPattern7 = [];
let goerpsPattern8 = [];
let schluckPattern = [];
let dosePattern = [];
/* 
set_pattern(goerpsPattern, vollNote);
set_pattern(schluckPattern, halbNote);
set_pattern(dosePattern, virtNote); */

set_pattern(goerpsPattern1, stopPattern);
set_pattern(goerpsPattern2, stopPattern);
set_pattern(goerpsPattern3, stopPattern);
set_pattern(goerpsPattern4, stopPattern);
set_pattern(goerpsPattern5, stopPattern);
set_pattern(goerpsPattern6, stopPattern);
set_pattern(goerpsPattern7, stopPattern);
set_pattern(goerpsPattern8, stopPattern);

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

//console.log(goerpsPattern, schluckPattern, dosePattern);

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
let goerpsPlay1 = true;
let goerpsPlay2 = true;
let goerpsPlay3 = true;
let goerpsPlay4 = true;
let goerpsPlay5 = true;
let goerpsPlay6 = true;
let goerpsPlay7 = true;
let goerpsPlay8 = true;
let schluckPlay = true;
let dosePlay = true;
let part;
let vollPhrase,
  halbPhrase,
  viertPhrase,
  b1Phrase,
  b2Phrase,
  b3Phrase,
  b4Phrase,
  b5Phrase,
  b6Phrase,
  b7Phrase,
  b8Phrase;

function preload() {
  goerps1 = loadSound("sounds/halb-goerps.mp3");
  goerps2 = loadSound("sounds/halb-goerps.mp3");
  goerps3 = loadSound("sounds/halb-goerps.mp3");
  goerps4 = loadSound("sounds/halb-goerps.mp3");
  goerps5 = loadSound("sounds/halb-goerps.mp3");
  goerps6 = loadSound("sounds/halb-goerps.mp3");
  goerps7 = loadSound("sounds/halb-goerps.mp3");
  goerps8 = loadSound("sounds/halb-goerps.mp3");
  schluck = loadSound("sounds/ganz-schluck.mp3");
  dose = loadSound("sounds/achtel-Bierdose.mp3");
}

function setup() {
  buttonb1 = createButton("b1");
  buttonb1.mousePressed(togglePlayingb1);

  buttonb2 = createButton("b2");
  buttonb2.mousePressed(togglePlayingb2);

  buttonb3 = createButton("b3");
  buttonb3.mousePressed(togglePlayingb3);

  buttonb4 = createButton("b4");
  buttonb4.mousePressed(togglePlayingb4);

  buttonb5 = createButton("b5");
  buttonb5.mousePressed(togglePlayingb5);

  buttonb6 = createButton("b6");
  buttonb6.mousePressed(togglePlayingb6);

  buttonb7 = createButton("b7");
  buttonb7.mousePressed(togglePlayingb7);

  buttonb8 = createButton("b8");
  buttonb8.mousePressed(togglePlayingb8);

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
  b1Phrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps1.rate(playbackRate);
      goerps1.play(time);
    },
    goerpsPattern1
  );
  b2Phrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps2.rate(playbackRate);
      goerps2.play(time);
    },
    goerpsPattern2
  );
  b3Phrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps3.rate(playbackRate);
      goerps3.play(time);
    },
    goerpsPattern3
  );
  b4Phrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps4.rate(playbackRate);
      goerps4.play(time);
    },
    goerpsPattern4
  );
  b5Phrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps5.rate(playbackRate);
      goerps5.play(time);
    },
    goerpsPattern5
  );
  b6Phrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps6.rate(playbackRate);
      goerps6.play(time);
    },
    goerpsPattern6
  );
  b7Phrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps7.rate(playbackRate);
      goerps7.play(time);
    },
    goerpsPattern7
  );
  b8Phrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps8.rate(playbackRate);
      goerps8.play(time);
    },
    goerpsPattern8
  );

  vollPhrase = new p5.Phrase(
    "goerps",
    (time, playbackRate) => {
      goerps1.rate(playbackRate);
      goerps1.play(time);
    },
    goerpsPattern1
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
  part.addPhrase(b1Phrase);
  part.addPhrase(b2Phrase);
  part.addPhrase(b3Phrase);
  part.addPhrase(b4Phrase);
  part.addPhrase(b5Phrase);
  part.addPhrase(b6Phrase);
  part.addPhrase(b7Phrase);
  part.addPhrase(b8Phrase);

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
function togglePlayingb1() {
  // flip from true to false and vice versa
  goerpsPlay1 = !goerpsPlay1;
  if (goerpsPlay1 == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern1, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern1, b1);
  }
}

function togglePlayingb2() {
  // flip from true to false and vice versa
  goerpsPlay2 = !goerpsPlay2;
  if (goerpsPlay2 == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern2, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern2, b2);
  }
}
function togglePlayingb3() {
  // flip from true to false and vice versa
  goerpsPlay3 = !goerpsPlay3;
  if (goerpsPlay3 == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern3, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern3, b3);
  }
}
function togglePlayingb4() {
  // flip from true to false and vice versa
  goerpsPlay4 = !goerpsPlay4;
  if (goerpsPlay4 == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern4, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern4, b4);
  }
}
function togglePlayingb5() {
  // flip from true to false and vice versa
  goerpsPlay5 = !goerpsPlay5;
  if (goerpsPlay5 == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern5, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern5, b5);
  }
}
function togglePlayingb6() {
  // flip from true to false and vice versa
  goerpsPlay6 = !goerpsPlay6;
  if (goerpsPlay6 == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern6, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern6, b6);
  }
}
function togglePlayingb7() {
  // flip from true to false and vice versa
  goerpsPlay7 = !goerpsPlay7;
  if (goerpsPlay7 == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern7, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern7, b7);
  }
}
function togglePlayingb8() {
  // flip from true to false and vice versa
  goerpsPlay8 = !goerpsPlay8;
  if (goerpsPlay8 == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern8, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern8, b8);
  }
}

function togglePlaying() {
  // flip from true to false and vice versa
  goerpsPlay1 = !goerpsPlay1;
  if (goerpsPlay1 == true) {
    console.log("pley goerps");
    set_pattern(goerpsPattern1, stopPattern);
  } else {
    console.log("stop goerps");
    set_pattern(goerpsPattern1, vollNote);
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
