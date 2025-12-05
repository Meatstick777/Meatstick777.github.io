var img;
var img2; 
var initials = 'OP'; 
var choice = '1'; 
var screenbg = 255; 
var lastscreenshot = 61;

// -----------------------------
// Brush sizes for each tool
// -----------------------------
let brushSizes = {
  "0": 50,
  "1": 20,
  "2": 20,
  "3": 15,
  "4": 20,
  "5": 5,
  "6": 25,
  "7": 10,
  "8": 20,
  "9": 20,
  "g": 50
};

// Arrays for dripping, blow effects, and ripples
let drippingDrops = [];
let blowDrops = [];
let energyRipples = [];

function preload() {
  img = loadImage('https://veryprofessional3d.github.io/images/cat3.jpg');
  img2 = loadImage('https://veryprofessional3d.github.io/images/cat2.jpg');
}

function setup() {
  createCanvas(600, 600);
  background(screenbg);
}

// -----------------------------
// Update effects
// -----------------------------
function draw() {
  // Update dripping drops
  for (let i = drippingDrops.length - 1; i >= 0; i--) {
    let d = drippingDrops[i];
    fill(d.color[0], d.color[1], d.color[2], d.alpha);
    noStroke();
    circle(d.x, d.y, d.size);
    if (d.y < d.startY + d.maxDistance) {
      d.y += d.speed;
    } else {
      d.speed = 0;
    }
  }

  // Update blow drops
  for (let i = blowDrops.length - 1; i >= 0; i--) {
    let p = blowDrops[i];
    fill(p.color[0], p.color[1], p.color[2], p.alpha);
    noStroke();
    circle(p.x, p.y, p.size);
    p.x += p.vx;
    p.y += p.vy;
    p.alpha -= 2;
    p.size *= 0.98;
    if (p.alpha <= 0 || p.size <= 0.5) blowDrops.splice(i, 1);
  }

  // Update energy ripples (Brush 0)
  for (let i = energyRipples.length - 1; i >= 0; i--) {
    let r = energyRipples[i];
    noFill();
    stroke(r.color[0], r.color[1], r.color[2], r.alpha);
    strokeWeight(2);
    circle(r.x, r.y, r.radius*2);
    r.radius += 1;       // expand
    r.alpha -= 3;        // fade
    if (r.alpha <= 0) energyRipples.splice(i,1);
  }

  if (keyIsPressed) {
    if ("0123456789gG".includes(key)) choice = key;
    clear_print();
  }

  if (mouseIsPressed) newkeyChoice(choice);
}

// -----------------------------
// Star helper
// -----------------------------
function drawStar(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// -----------------------------
// Color Palettes per Brush
// -----------------------------
let palettes = {
  "0": [ [0,255,255],[255,0,255],[255,255,0],[128,0,255] ], // energy ripple
  "1": [ [255,0,0],[255,128,0],[255,255,0],[0,255,0],[0,255,255],[0,0,255],[128,0,255] ], // rainbow spray
  "2": [ [255,100,0],[255,150,50],[255,200,100] ], // warm drips
  "3": [ [50,100,255],[100,150,255],[150,200,255] ], // cool blow
  "4": [ [255,0,255],[255,128,255],[255,200,255] ], // neon streak
  "5": [ [255,255,0],[255,200,0],[255,150,0] ], // golden stars
  "6": [ [255,128,0],[255,200,0],[255,255,0] ], // sparkles
  "7": [ [0,255,128],[0,200,255],[0,150,255] ], // bubble burst
  "8": [ [0,255,255],[0,200,200],[0,150,255] ], // neon sign
  "9": [ [255,50,200],[255,100,220],[255,150,240] ] // neon pulse
};

// -----------------------------
// Draw Brushes
// -----------------------------
function newkeyChoice(toolChoice) {
  let size = brushSizes[toolChoice] || 10;
  let palette = palettes[toolChoice] || [[255,255,255]];

  // ----------------- Spray Brush 1 -----------------
  if (toolChoice == '1') { 
    stroke(100);
    for (let i = 0; i < 40; i++) {
      let c = random(palette);
      fill(c[0], c[1], c[2], 80);
      circle(mouseX + random(-size, size), mouseY + random(-size, size), random(2, 5));
    }
  }

  // ----------------- Dripping Spray 2 -----------------
  else if (toolChoice == '2') { 
    noStroke();
    if (frameCount % 2 === 0) {
      for (let i = 0; i < 3; i++) {
        let c = random(palette);
        drippingDrops.push({
          x: mouseX + random(-5, 5),
          y: mouseY + random(-5, 5),
          startY: mouseY,
          size: random(1.5, size / 4),
          speed: random(0.5, 1.2),
          alpha: random(80,150),
          maxDistance: random(10,25),
          color: c
        });
      }
    }
  }

  // ----------------- Blow Brush 3 -----------------
  else if (toolChoice == '3') { 
    noStroke();
    for (let i = 0; i < 3; i++) {
      let c = random(palette);
      blowDrops.push({
        x: mouseX,
        y: mouseY,
        vx: random(-0.8, 0.8),
        vy: random(-0.8, 0.8),
        size: random(1, size / 2),
        alpha: random(80, 150),
        color: c
      });
    }
  }

  // ----------------- Streaks Brush 4 -----------------
  else if (toolChoice == '4') { 
    for (let i = 0; i < 4; i++) {
      let angle = random(-PI/6, PI/6);
      let len = random(size, size + 15);
      let thickness = random(2, 4);
      let x2 = mouseX + cos(angle) * len;
      let y2 = mouseY + sin(angle) * len;
      let c = random(palette);
      stroke(c[0], c[1], c[2], 150);
      strokeWeight(thickness);
      line(mouseX, mouseY, x2, y2);
    }
  }

  // ----------------- Star Spray 5 -----------------
  else if (toolChoice == '5') { 
    noStroke();
    for (let i = 0; i < 18; i++) {
      let ox = random(-30, 30);
      let oy = random(-30, 30);
      let s = random(1.5, size);
      let c = random(palette);
      fill(c[0], c[1], c[2], random(80, 180));
      drawStar(mouseX + ox, mouseY + oy, s / 2, s, 5);
    }
  }

  // ----------------- Magic Sparkle 6 -----------------
  else if (toolChoice == '6') { 
    for (let i = 0; i < 12; i++) {
      let px = mouseX + random(-10, 10);
      let py = mouseY + random(-10, 10);
      let sz = random(2, size);
      let c = random(palette);
      noStroke();
      fill(c[0], c[1], c[2], 150);
      circle(px, py, sz);
    }
  }

  // ----------------- Bubble Burst 7 -----------------
  else if (toolChoice == '7') { 
    for (let i = 0; i < 6; i++) {
      let bx = mouseX + random(-15, 15);
      let by = mouseY + random(-15, 15);
      let bsize = random(1, size);
      let alpha = random(50,120);
      let c = random(palette);
      noStroke();
      fill(c[0], c[1], c[2], alpha);
      circle(bx, by, bsize);
      blowDrops.push({x: bx, y: by, vx: random(-0.3,0.3), vy: random(-0.5,-0.1), size: bsize, alpha: alpha, color:c});
    }
  }

  // ----------------- Neon Sign Brush 8 -----------------
  else if (toolChoice == '8') { 
    for (let i = size; i >= 1; i--) {
      let c = random(palette);
      stroke(c[0],c[1],c[2],50);
      strokeWeight(i*2);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }
    let c = random(palette);
    stroke(c[0],c[1],c[2],255);
    strokeWeight(2);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  // ----------------- Neon Pulse Brush 9 -----------------
  else if (toolChoice == '9') { 
    let base = random(size, size+10);
    let alpha = random(80,180);
    for (let glow = 3; glow >= 1; glow--) {
      noFill();
      let c = random(palette);
      stroke(c[0],c[1],c[2], alpha/glow);
      strokeWeight(glow*2);
      circle(mouseX, mouseY, base + glow*5);
    }
    let c = random(palette);
    fill(c[0],c[1],c[2], alpha);
    noStroke();
    circle(mouseX, mouseY, base);
  }

  // ----------------- Energy Ripple Brush 0 -----------------
  else if (toolChoice == '0') {
    for (let i = 0; i < 3; i++) {
      let px = mouseX + random(-5, 5);
      let py = mouseY + random(-5, 5);
      let c = random(palette);
      let ripple = {
        x: px,
        y: py,
        radius: random(5, 15),
        maxRadius: brushSizes['0'],
        color: c,
        alpha: 150
      };
      energyRipples.push(ripple);
    }
  }

  // ----------------- Place Image -----------------
  else if (toolChoice == 'g' || toolChoice == 'G') { 
    image(img, mouseX, mouseY, 50, 50);
  }
}

// -----------------------------
// Clear and Save
// -----------------------------
function clear_print() {
  if (key == 'x' || key == 'X') {
    background(screenbg);
    drippingDrops = [];
    blowDrops = [];
    energyRipples = [];
  } else if (key == 'p' || key == 'P') {
    saveme();
  }
}

function saveme() {
  let filename = initials + day() + hour() + minute() + second();
  if (second() != lastscreenshot) {
    saveCanvas(filename, 'jpg');
    key = "";
  }
  lastscreenshot = second();
}

// -----------------------------
// Change Brush Size
// -----------------------------
function keyPressed() {
  if (key === '+') {
    brushSizes[choice] += 5;
  } else if (key === '-') {
    brushSizes[choice] = max(1, brushSizes[choice] - 5);
  }
}
