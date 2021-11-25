/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

const UP = 37;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var HP = 100 // hp
var punten = 0 // punten
var vijandX = 700 // x-positie van speler
var vijandY = 0 // y-positie van speler

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
 vijandY=vijandY+10;
 if (vijandY > 720) { vijandY = 0}
 // kogel

  // speler
  if (keyIsDown(UP)) { spelerX = spelerX - 5 }
  if (keyIsDown(39)) { spelerX = spelerX + 5 }
  if (keyIsDown(40)) { spelerY = spelerY + 5 }
  if (keyIsDown(38)) { spelerY = spelerY - 5 }
  if (spelerX < 0) { spelerX = 0; }
  if (spelerX > 1280) { spelerX = 1280; }
  if (spelerY < 0) { spelerY = 0; }
  if (spelerY > 720) { spelerY = 720; }
};
/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if ( (vijandY-spelerY) > -50 &&
     (vijandY-spelerY) < 50 && 
     (vijandX-spelerX) > -50 &&
     (vijandX-spelerX) < 50 
   ) { console.log('HP')
     HP= HP-1
   }
  // botsing kogel tegen vijand
 punten= punten + 0.2 ;
};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("black");
  rect(0, 0, 1280, 720);
  // inforegel
  fill("green");
  textSize(32);
  text('HP: ' +HP , 50, 70);
  text('POINTS: ' +floor(punten) , 50,40);

  // vijand
  fill("blue");
  rect(vijandX, vijandY, 50, 50)
  fill("white")
  ellipse(vijandX + 25, vijandY + 25, 10, 10)
  
  // kogel

  // speler
  fill("blue")
  rect(spelerX - 25, spelerY - 25, 50, 50)
  fill("yellow");
  ellipse(spelerX, spelerY, 50, 50);
  fill("red");
  ellipse(spelerX,spelerY,20,20)
  // punten en health

};


/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('red');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (HP<=0) {
      spelStatus = GAMEOVER;
    }
  }
  
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
   textSize(32);
   background('black');
   text("GET RECKED MOTHAFUCKAAAAA", 50,500);
   text('POINTS: ' +floor(punten) , 50,600);
  }
}
