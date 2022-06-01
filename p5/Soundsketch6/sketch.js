let vollNote = [1, 0, 0, 0, 1, 0, 0, 0];
let halbNote = [1, 0, 1, 0, 1, 0, 1, 0];
let virtNote = [1, 1, 1, 1, 1, 1, 1, 1];
let goerps, schluck, dose;
let button, button2, button3;
let part;
let vollPhrase, halbPhrase;

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

  vollPhrase = new p5.Phrase("goerps", togglePlaying, vollNote);
  halbPhrase = new p5.Phrase("schluck", togglePlaying2, halbNote);
  part = new p5.Part();
  part.addPhrase(vollPhrase);
  part.addPhrase(halbPhrase);

  part.setBPM(50);
  part.loop();

  //part.loop();
  /*   p5.Part.prototype.removePhrase = function (name) {
    for (var i in this.phrases) {
      if (this.phrases[i].name === name) {
        this.phrases.splice(i, 1);
      }
    }
  }; */
}

function togglePlaying(time, playbackRate) {
  goerps.rate(playbackRate);
  goerps.play(time);
  console.log(part);
}
function togglePlaying2(time, playbackRate) {
  schluck.rate(playbackRate);
  schluck.play(time);
}

function keyPressed() {
  if (key == "s") {
    part.stop();
  }
}

/*  function playPart() {
  userStartAudio();

  part.start();
}   */

/* function togglePlaying(time, playbackRate) {
  //userStartAudio();
  if (!goerps.isPlaying()) {
    part.addPhrase(vollPhrase);
    goerps.rate(playbackRate);
    goerps.loop(time);
    part.loop();
    console.log(part);

    button.html("stop");
  } else {
    part.removePhrase("vollPhrase");
    goerps.stop();
    part.stop();

    //goerps.pause();
    button.html("play");
  }
}
function togglePlaying2(time, playbackRate) {
  //userStartAudio();
  if (!schluck.isPlaying()) {
    part.addPhrase(halbPhrase);
    schluck.rate(playbackRate);
    schluck.loop(time);
    part.loop();
    //button.html("pause");

    button2.html("stop");
  } else {
    part.removePhrase("halbPhrase");
    schluck.stop();
    part.stop();

    //goerps.pause();

    button2.html("play");
  }
} */

function draw() {}

function recSound() {}

function startRec() {}

function mousePressed() {}

function windowResized() {}
