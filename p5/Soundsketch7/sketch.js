/* const vollNote = [1, 0, 0, 0, 1, 0, 0, 0];
const halbNote = [1, 0, 1, 0, 1, 0, 1, 0];
const virtNote = [1, 1, 1, 1, 1, 1, 1, 1]; */

let col = (25, 23, 200, 50);

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

let schluckPattern1 = [];
let schluckPattern2 = [];
let schluckPattern3 = [];
let schluckPattern4 = [];
let schluckPattern5 = [];
let schluckPattern6 = [];
let schluckPattern7 = [];
let schluckPattern8 = [];

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

set_pattern(schluckPattern1, stopPattern);
set_pattern(schluckPattern2, stopPattern);
set_pattern(schluckPattern3, stopPattern);
set_pattern(schluckPattern4, stopPattern);
set_pattern(schluckPattern5, stopPattern);
set_pattern(schluckPattern6, stopPattern);
set_pattern(schluckPattern7, stopPattern);
set_pattern(schluckPattern8, stopPattern);

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

let buttonb1,
  buttonb2,
  buttonb3,
  buttonb4,
  buttonb5,
  buttonb6,
  buttonb7,
  buttonb8;

let buttons1,
  buttons2,
  buttons3,
  buttons4,
  buttons5,
  buttons6,
  buttons7,
  buttons8;
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

let schluckPlay1 = true;
let schluckPlay2 = true;
let schluckPlay3 = true;
let schluckPlay4 = true;
let schluckPlay5 = true;
let schluckPlay6 = true;
let schluckPlay7 = true;
let schluckPlay8 = true;

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

let s1Phrase,
  s2Phrase,
  s3Phrase,
  s4Phrase,
  s5Phrase,
  s6Phrase,
  s7Phrase,
  s8Phrase;

function preload() {
  ///goerpse///
  goerps1 = loadSound("sounds/halb-goerps.mp3");
  goerps2 = loadSound("sounds/halb-goerps.mp3");
  goerps3 = loadSound("sounds/halb-goerps.mp3");
  goerps4 = loadSound("sounds/halb-goerps.mp3");
  goerps5 = loadSound("sounds/halb-goerps.mp3");
  goerps6 = loadSound("sounds/halb-goerps.mp3");
  goerps7 = loadSound("sounds/halb-goerps.mp3");
  goerps8 = loadSound("sounds/halb-goerps.mp3");

  ///schluecke///
  schluck1 = loadSound("sounds/ganz-schluck.mp3");
  schluck2 = loadSound("sounds/ganz-schluck.mp3");
  schluck3 = loadSound("sounds/ganz-schluck.mp3");
  schluck4 = loadSound("sounds/ganz-schluck.mp3");
  schluck5 = loadSound("sounds/ganz-schluck.mp3");
  schluck6 = loadSound("sounds/ganz-schluck.mp3");
  schluck7 = loadSound("sounds/ganz-schluck.mp3");
  schluck8 = loadSound("sounds/ganz-schluck.mp3");

  ///dose///
  //dose = loadSound("sounds/achtel-Bierdose.mp3");
}

function setup() {
  createCanvas(0, 0);
  ///Goerps///
  buttonb1 = createButton("");
  buttonb1.addClass("buttonb");
  buttonb1.mousePressed(togglePlayingb1);

  buttonb2 = createButton("");
  buttonb2.addClass("buttonb");
  buttonb2.mousePressed(togglePlayingb2);

  buttonb3 = createButton("");
  buttonb3.addClass("buttonb");
  buttonb3.mousePressed(togglePlayingb3);

  buttonb4 = createButton("");
  buttonb4.addClass("buttonb");
  buttonb4.mousePressed(togglePlayingb4);

  buttonb5 = createButton("");
  buttonb5.addClass("buttonb");
  buttonb5.mousePressed(togglePlayingb5);

  buttonb6 = createButton("");
  buttonb6.addClass("buttonb");
  buttonb6.mousePressed(togglePlayingb6);

  buttonb7 = createButton("");
  buttonb7.addClass("buttonb");
  buttonb7.mousePressed(togglePlayingb7);

  buttonb8 = createButton("");
  buttonb8.addClass("buttonb");
  buttonb8.mousePressed(togglePlayingb8);

  //// Schlucke ////
  buttons1 = createButton("");
  buttons1.addClass("buttons");
  buttons1.mousePressed(togglePlayings1);

  buttons2 = createButton("");
  buttons2.addClass("buttons");
  buttons2.mousePressed(togglePlayings2);

  buttons3 = createButton("");
  buttons3.addClass("buttons");
  buttons3.mousePressed(togglePlayings3);

  buttons4 = createButton("");
  buttons4.addClass("buttons");
  buttons4.mousePressed(togglePlayings4);

  buttons5 = createButton("");
  buttons5.addClass("buttons");
  buttons5.mousePressed(togglePlayings5);

  buttons6 = createButton("");
  buttons6.addClass("buttons");
  buttons6.mousePressed(togglePlayings6);

  buttons7 = createButton("");
  buttons7.addClass("buttons");
  buttons7.mousePressed(togglePlayings7);

  buttons8 = createButton("");
  buttons8.addClass("buttons");
  buttons8.mousePressed(togglePlayings8);

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

  ////Goerps Phrases///
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

  ///Schlucke Phrases///
  s1Phrase = new p5.Phrase(
    "schluck",
    (time, playbackRate) => {
      schluck1.rate(playbackRate);
      schluck1.play(time);
    },
    schluckPattern1
  );

  s2Phrase = new p5.Phrase(
    "schluck",
    (time, playbackRate) => {
      schluck2.rate(playbackRate);
      schluck2.play(time);
    },
    schluckPattern2
  );

  s3Phrase = new p5.Phrase(
    "schluck",
    (time, playbackRate) => {
      schluck3.rate(playbackRate);
      schluck3.play(time);
    },
    schluckPattern3
  );

  s4Phrase = new p5.Phrase(
    "schluck",
    (time, playbackRate) => {
      schluck4.rate(playbackRate);
      schluck4.play(time);
    },
    schluckPattern4
  );

  s5Phrase = new p5.Phrase(
    "schluck",
    (time, playbackRate) => {
      schluck5.rate(playbackRate);
      schluck5.play(time);
    },
    schluckPattern5
  );

  s6Phrase = new p5.Phrase(
    "schluck",
    (time, playbackRate) => {
      schluck6.rate(playbackRate);
      schluck6.play(time);
    },
    schluckPattern6
  );

  s7Phrase = new p5.Phrase(
    "schluck",
    (time, playbackRate) => {
      schluck7.rate(playbackRate);
      schluck7.play(time);
    },
    schluckPattern7
  );

  s8Phrase = new p5.Phrase(
    "schluck",
    (time, playbackRate) => {
      schluck8.rate(playbackRate);
      schluck8.play(time);
    },
    schluckPattern8
  );

  part = new p5.Part();

  part.addPhrase(b1Phrase);
  part.addPhrase(b2Phrase);
  part.addPhrase(b3Phrase);
  part.addPhrase(b4Phrase);
  part.addPhrase(b5Phrase);
  part.addPhrase(b6Phrase);
  part.addPhrase(b7Phrase);
  part.addPhrase(b8Phrase);
  ///Schlucke///
  part.addPhrase(s1Phrase);
  part.addPhrase(s2Phrase);
  part.addPhrase(s3Phrase);
  part.addPhrase(s4Phrase);
  part.addPhrase(s5Phrase);
  part.addPhrase(s6Phrase);
  part.addPhrase(s7Phrase);
  part.addPhrase(s8Phrase);

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

///Goesrps///
function togglePlayingb1() {
  // flip from true to false and vice versa
  goerpsPlay1 = !goerpsPlay1;
  if (goerpsPlay1 == true) {
    set_pattern(goerpsPattern1, stopPattern);
    buttonb1.removeClass("buttonpressed");
  } else {
    set_pattern(goerpsPattern1, b1);
    buttonb1.addClass("buttonpressed");
  }
}

function togglePlayingb2() {
  // flip from true to false and vice versa
  goerpsPlay2 = !goerpsPlay2;
  if (goerpsPlay2 == true) {
    set_pattern(goerpsPattern2, stopPattern);
    buttonb2.removeClass("buttonpressed");
  } else {
    set_pattern(goerpsPattern2, b2);
    buttonb2.addClass("buttonpressed");
  }
}
function togglePlayingb3() {
  // flip from true to false and vice versa
  goerpsPlay3 = !goerpsPlay3;
  if (goerpsPlay3 == true) {
    set_pattern(goerpsPattern3, stopPattern);
    buttonb3.removeClass("buttonpressed");
  } else {
    set_pattern(goerpsPattern3, b3);
    buttonb3.addClass("buttonpressed");
  }
}
function togglePlayingb4() {
  // flip from true to false and vice versa
  goerpsPlay4 = !goerpsPlay4;
  if (goerpsPlay4 == true) {
    set_pattern(goerpsPattern4, stopPattern);
    buttonb4.removeClass("buttonpressed");
  } else {
    set_pattern(goerpsPattern4, b4);
    buttonb4.addClass("buttonpressed");
  }
}
function togglePlayingb5() {
  // flip from true to false and vice versa
  goerpsPlay5 = !goerpsPlay5;
  if (goerpsPlay5 == true) {
    set_pattern(goerpsPattern5, stopPattern);
    buttonb5.removeClass("buttonpressed");
  } else {
    set_pattern(goerpsPattern5, b5);
    buttonb5.addClass("buttonpressed");
  }
}
function togglePlayingb6() {
  // flip from true to false and vice versa
  goerpsPlay6 = !goerpsPlay6;
  if (goerpsPlay6 == true) {
    set_pattern(goerpsPattern6, stopPattern);
    buttonb6.removeClass("buttonpressed");
  } else {
    set_pattern(goerpsPattern6, b6);
    buttonb6.addClass("buttonpressed");
  }
}
function togglePlayingb7() {
  // flip from true to false and vice versa
  goerpsPlay7 = !goerpsPlay7;
  if (goerpsPlay7 == true) {
    set_pattern(goerpsPattern7, stopPattern);
    buttonb7.removeClass("buttonpressed");
  } else {
    set_pattern(goerpsPattern7, b7);
    buttonb7.addClass("buttonpressed");
  }
}
function togglePlayingb8() {
  // flip from true to false and vice versa
  goerpsPlay8 = !goerpsPlay8;
  if (goerpsPlay8 == true) {
    set_pattern(goerpsPattern8, stopPattern);
    buttonb8.removeClass("buttonpressed");
  } else {
    set_pattern(goerpsPattern8, b8);
    buttonb8.addClass("buttonpressed");
  }
}

///Schlucke////

function togglePlayings1() {
  // flip from true to false and vice versa
  schluckPlay1 = !schluckPlay1;
  if (schluckPlay1 == true) {
    set_pattern(schluckPattern1, stopPattern);
    buttons1.removeClass("buttonpressed");
  } else {
    set_pattern(schluckPattern1, b1);
    buttons1.addClass("buttonpressed");
  }
}

function togglePlayings2() {
  // flip from true to false and vice versa
  schluckPlay2 = !schluckPlay2;
  if (schluckPlay2 == true) {
    set_pattern(schluckPattern2, stopPattern);
    buttons2.removeClass("buttonpressed");
  } else {
    set_pattern(schluckPattern2, b2);
    buttons2.addClass("buttonpressed");
  }
}

function togglePlayings3() {
  // flip from true to false and vice versa
  schluckPlay3 = !schluckPlay3;
  if (schluckPlay3 == true) {
    set_pattern(schluckPattern3, stopPattern);
    buttons3.removeClass("buttonpressed");
  } else {
    set_pattern(schluckPattern3, b3);
    buttons3.addClass("buttonpressed");
  }
}

function togglePlayings4() {
  // flip from true to false and vice versa
  schluckPlay4 = !schluckPlay4;
  if (schluckPlay4 == true) {
    set_pattern(schluckPattern4, stopPattern);
    buttons4.removeClass("buttonpressed");
  } else {
    set_pattern(schluckPattern4, b4);
    buttons4.addClass("buttonpressed");
  }
}

function togglePlayings5() {
  // flip from true to false and vice versa
  schluckPlay5 = !schluckPlay5;
  if (schluckPlay5 == true) {
    set_pattern(schluckPattern5, stopPattern);
    buttons5.removeClass("buttonpressed");
  } else {
    set_pattern(schluckPattern5, b5);
    buttons5.addClass("buttonpressed");
  }
}

function togglePlayings6() {
  // flip from true to false and vice versa
  schluckPlay6 = !schluckPlay6;
  if (schluckPlay6 == true) {
    set_pattern(schluckPattern6, stopPattern);
    buttons6.removeClass("buttonpressed");
  } else {
    set_pattern(schluckPattern6, b6);
    buttons6.addClass("buttonpressed");
  }
}

function togglePlayings7() {
  // flip from true to false and vice versa
  schluckPlay7 = !schluckPlay7;
  if (schluckPlay7 == true) {
    set_pattern(schluckPattern7, stopPattern);
    buttons7.removeClass("buttonpressed");
  } else {
    set_pattern(schluckPattern7, b7);
    buttons7.addClass("buttonpressed");
  }
}

function togglePlayings8() {
  // flip from true to false and vice versa
  schluckPlay8 = !schluckPlay8;
  if (schluckPlay8 == true) {
    set_pattern(schluckPattern8, stopPattern);
    buttons8.removeClass("buttonpressed");
  } else {
    set_pattern(schluckPattern8, b8);
    buttons8.addClass("buttonpressed");
  }
}


