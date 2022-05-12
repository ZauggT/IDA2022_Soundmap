let history;
let count = 0;

function preload() {
  history = loadJSON("chrome_history.json");
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  //let url = "chrome_history.json";

  console.log(history[0].title);
  frameRate(1);
}

function draw() {
  /*   background(2, 204, 123, 10);
  fill(random(255), random(255), random(255));
  ellipse(mouseX, mouseY, random(1, 20));
  line(width / 2, height / 2, mouseX, mouseY); */
  //let a = map((history[count].visitCount, 1, 251, 0, 255));
  //console.log(a);
  let textTitle = history[count].title;
  let textTime = history[count].lastVisitTimeLocal;
  let textWidthTitle = textWidth(textTitle);
  let textWidthTime = textWidth(textTime);

  background(0);
  noStroke();
  fill(255);
  textAlign(CENTER);
  textSize(map(history[count].visitCount, 1, 100, 24, 50));
  text(textTitle, width / 2, height / 2);
  text(textTime, width / 2, 150 + height / 2);

  noFill();
  strokeWeight(2);
  stroke(255);
  //rect(200, 400, 1000, 500);

  ellipse(
    random(width / 4, width - width / 4),
    random(height / 4, height - height / 4),
    textWidthTitle
  );

  let img = createImg(
    "https://www.google.com/s2/favicons?domain=" + history[count].url
  );
  img.hide(); //ansonsten wird das Bild im HTML zusätzlich dargestellt
  if (typeof img === "object") {
    image(img, width / 2, height / 2 + 50, 32, 32);
  }

  count++;
  if (count > Object.keys(history).length) {
    count = 0;
  }

  ///

  /*    let start = 0;
  let zeile = 15; // Versatz in der y Achse, soviel rutscht jeder Eintrag gegen unten
  let step = 1; // Um soviel Pixel wird der nächste Eintrag grösser 
  let portion = 50;
  for (let i = start; i < portion + start; i++) {
    textSize((i - start) * step);
    text(history[i].title, width / 2, (i - start - 1) * zeile);
  } */
}

function keyReleased() {
  if (key == "s" || key == "S") {
    let d = new Date();
    let now =
      d.getFullYear() +
      "" +
      (d.getMonth() + 1) +
      "" +
      d.getDate() +
      "" +
      (d.getHours() + 1) +
      "-" +
      (d.getMinutes() + 1) +
      "" +
      (d.getSeconds() + 1) +
      "-" +
      frameCount;
    saveCanvas(now, "png");
  }
}
