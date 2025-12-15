// ----------------------------
// Global Variables
// ----------------------------
let playerSize = 35;
let score = 0;
let health = 100;
let level = 1;
let gameState = "intro"; // "intro", "info", "playing", "win"

let trashItems = [];
let hazards = [];
let contaminationZones = [];
let dumpster;

let infoMessages = [];

// ----------------------------
// Setup
// ----------------------------
function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textSize(20);
  noCursor();

  dumpster = { x: width - 60, y: height - 60, size: 50 };

  setupLevel(level);
}

// ----------------------------
// Draw Loop
// ----------------------------
function draw() {
  background(100, 200, 100);

  if (gameState === "intro") {
    drawIntroScreen();
    return;
  }

  if (gameState === "info") {
    drawInfoScreen();
    return;
  }

  if (gameState === "playing") {
    drawGameplay();
  }

  if (gameState === "win") {
    drawWinScreen();
  }
}

// ----------------------------
// Gameplay Function
// ----------------------------
function drawGameplay() {
  // Draw dumpster
  fill(120);
  rectMode(CENTER);
  rect(dumpster.x, dumpster.y, dumpster.size, dumpster.size);
  fill(255);
  textSize(14);
  text("Dumpster", dumpster.x, dumpster.y - 40);

  // Draw contamination zones
  for (let z of contaminationZones) {
    fill(200, 0, 0, 80);
    ellipse(z.x, z.y, z.size * 2);
    let d = dist(mouseX, mouseY, z.x, z.y);
    if (d < z.size) health -= 0.2;
  }

  // Draw hazards
  for (let h of hazards) {
    h.x += h.speedX;
    h.y += h.speedY;

    if (h.x < 20 || h.x > width - 20) h.speedX *= -1;
    if (h.y < 20 || h.y > height - 20) h.speedY *= -1;

    fill(150, 0, 150, 180);
    ellipse(h.x, h.y, h.size);

    let d = dist(mouseX, mouseY, h.x, h.y);
    if (d < (playerSize + h.size) / 2) {
      health -= 0.5;
      addInfoMessage("You got too close to contaminants!", 100);
    }
  }

  // Draw trash
  for (let t of trashItems) {
    if (!t.collected) {
      fill(255, 255, 0);
      ellipse(t.x, t.y, t.size);
    }

    let d = dist(mouseX, mouseY, t.x, t.y);
    if (!t.collected && d < (playerSize + t.size) / 2) {
      t.collected = true;
      score++;
      addInfoMessage("Trash collected! Move to dumpster to dispose.", 100);
    }
  }

  // Throw trash in dumpster
  let dToDumpster = dist(mouseX, mouseY, dumpster.x, dumpster.y);
  if (dToDumpster < (playerSize + dumpster.size) / 2 && score > 0) {
    addInfoMessage("Trash disposed! Good job!", 100);
    score = 0;

    // Reset trash
    for (let t of trashItems) {
      t.collected = false;
      t.x = random(60, width - 120);
      t.y = random(60, height - 120);
    }

    // Increase hazard difficulty per level
    if (level < 4) {
      level++;
      setupLevel(level);
      gameState = "info";
    } else {
      gameState = "win";
    }
  }

  // Draw player
  fill(255, 200, 0);
  ellipse(mouseX, mouseY, playerSize);

  // Info messages
  handleInfoMessages();

  // UI
  fill(0);
  textSize(18);
  text("Health: " + floor(health), width / 2, 30);
  text("Trash collected: " + score, width / 2, 50);

  if (health <= 0) {
    fill(0);
    textSize(48);
    text("Game Over!", width / 2, height / 2);
    noLoop();
  }
}

// ----------------------------
// Info Messages
// ----------------------------
function addInfoMessage(msg, duration) {
  infoMessages.push({ text: msg, timer: duration });
}

function handleInfoMessages() {
  textSize(16);
  fill(255);
  for (let i = infoMessages.length - 1; i >= 0; i--) {
    let m = infoMessages[i];
    text(m.text, width / 2, 100 + i * 20);
    m.timer--;
    if (m.timer <= 0) infoMessages.splice(i, 1);
  }
}

// ----------------------------
// Intro Screen
// ----------------------------
function drawIntroScreen() {
  background(0);
  fill(255, 255, 0);
  textSize(36);
  text("MOUSE CLEANUP GAME", width / 2, height / 2 - 100);
  textSize(20);
  fill(255);
  text("Move your mouse to collect trash.", width / 2, height / 2 - 40);
  text("Avoid hazards and contamination zones.", width / 2, height / 2 - 10);
  text("Click to start!", width / 2, height / 2 + 80);
}

// ----------------------------
// Info Screens per Level
// ----------------------------
function drawInfoScreen() {
  background(50, 100, 200);
  fill(255);
  textSize(28);
  if (level === 1) {
    text("Level 1: Individual Risk Factors", width / 2, 150);
    textSize(18);
    text("Residences near dumpsters expose individuals to contaminants.\n" +
         "Collect trash to reduce risk.", width / 2, 250);
  } else if (level === 2) {
    text("Level 2: Family & Social Network", width / 2, 150);
    textSize(18);
    text("Dumpster hazards affect family and friends too,\n" +
         "stress spreads if trash is not managed.", width / 2, 250);
  } else if (level === 3) {
    text("Level 3: Neighborhood / City", width / 2, 150);
    textSize(18);
    text("Neighborhood conditions increase exposure risk.\n" +
         "Poor urban planning creates more hazards.", width / 2, 250);
  } else if (level === 4) {
    text("Level 4: Country / Society", width / 2, 150);
    textSize(18);
    text("Political decisions affect environmental health.\n" +
         "Handle more trash and avoid faster hazards!", width / 2, 250);
  }

  textSize(20);
  fill(255, 255, 0);
  text("Click to start Level " + level, width / 2, height - 100);
}

// ----------------------------
// Win Screen
// ----------------------------
function drawWinScreen() {
  background(0);
  fill(255, 255, 0);
  textSize(48);
  text("YOU WIN!", width / 2, height / 2);
  textSize(24);
  fill(255);
  text("All trash cleaned safely!\nRefresh to play again.", width / 2, height / 2 + 60);
}

// ----------------------------
// Setup Level Trash, Hazards, Zones
// ----------------------------
function setupLevel(lv) {
  trashItems = [];
  hazards = [];
  contaminationZones = [];

  let numTrash = 3 + lv * 2;       // progressively more trash
  let numHazards = lv * 2;         // progressively more hazards
  let numZones = lv - 1;           // add zones starting level 2

  // Trash
  for (let i = 0; i < numTrash; i++) {
    trashItems.push({
      x: random(60, width - 120),
      y: random(60, height - 120),
      size: 20,
      collected: false
    });
  }

  // Hazards
  for (let i = 0; i < numHazards; i++) {
    let speed = 0.5 + lv * 0.5; // progressively faster
    hazards.push({
      x: random(60, width - 120),
      y: random(60, height - 120),
      size: 25,
      speedX: random(-speed, speed),
      speedY: random(-speed, speed)
    });
  }

  // Contamination Zones
  for (let i = 0; i < numZones; i++) {
    contaminationZones.push({
      x: random(100, width - 100),
      y: random(100, height - 100),
      size: 50 + lv * 10
    });
  }
}

// ----------------------------
// Mouse Press
// ----------------------------
function mousePressed() {
  if (gameState === "intro") {
    gameState = "info";
  } else if (gameState === "info") {
    gameState = "playing";
  }
}
