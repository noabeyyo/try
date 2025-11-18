let ideas = [
  "פֵּרוּק", "אוֹנְלַיְן", "אוֹפְנָה", "אוֹתֶנְטִיּוּת", "אִי־וַדָּאוּת", "אִידֵיאוֹלוֹגְיָה",
  "דָּת", "אֱמוּנָה", "אָסוֹן", "אוֹפוֹרְיָה", "אַפּוֹקָלִיפְּסָה", "אַקְטִיבִיזְם",
  "אֶקְסְטְרִים", "אַרְכִיוֹן", "בְּחִירָה", "בִּידּוּר", "בִּקֹּרֶת", "גְּבוּל",
  "גַּבְרִיוּת", "גֹּדֶל", "גוּף", "גִּזְעָנוּת", "גָּלוּת", "הִיבְרִידִיּוּת",
  "הֵילָה", "וִירוּס", "זֶהוּת", "זִכָּרוֹן", "חוֹר שָׁחוֹר", "חַתְרנוּת",
  "כָּאוֹס", "תַּת־מוּדָע", "מִגְדָּר", "מַפָּה", "מֶרְחָב", "נִשְׂגָּב", "עֵדוּת",
  "שֶׁקֶט", "זְמַן", "נִיתּוּק", "מֶרְחָק", "אֹבְדָן", "שְׁקוּפִיּוּת", "אִיזּוּן",
  "שִׁחְזוּר", "רַעַשׁ לָבָן", "רֶשֶׁת", "זָרוּת", "בַּיִת", "הִתְנַגְּשׁוּת",
  "שֶׁקֶר", "דְּמָמָה", "שִׁכְחָה", "קֶצֶב", "נִגּוּד", "תֶּדֶר", "שִׁגְרָה", "שִׁנּוּי" , "שִׁיבּוּשׁ"
];

let currentIdea = "";
let targetIdea = "";
let animating = false;
let font;

function preload() {
  font = loadFont("HadassahFriedlaenderBETA-Regular.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(80);
  fill("#2344FF");

  let button = createButton("הגרלת נושא");
  button.mousePressed(startAnimation);

  currentIdea = random(ideas);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  text(reverseHebrew(currentIdea), width / 2, height / 2);
}

// מתקן כיוון עברית הפוך
function reverseHebrew(str) {
  return str.split("").reverse().join("");
}

function startAnimation() {
  if (animating) return;
  animating = true;
  targetIdea = random(ideas);

  let frames = 12; // פחות זמן - אנימציה קצרה יותר
  let count = 0;

  let interval = setInterval(() => {
    currentIdea = random(ideas);
    count++;

    if (count > frames) {
      clearInterval(interval);
      currentIdea = targetIdea;
      animating = false;
    }
  }, 80); // מהירות ספין
}
