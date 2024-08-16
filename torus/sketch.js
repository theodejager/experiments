let toruses = []; // Array to hold the toruses
let numToruses = 10; // Number of toruses to create

function setup() {
  createCanvas(1000, 1000, WEBGL);

  // Populate the array with toruses
  for (let i = 0; i < numToruses; i++) {
    let x = random(-500, 500);
    let y = random(-500, 500);
    let radius = random(30, 100);
    let col = color(random(255), random(255), random(255)); // Generate a random color
    toruses.push(new Torus(x, y, radius, col));
  }
}

function draw() {
  orbitControl();
  background(220);

  // Display all toruses
  for (let i = 0; i < toruses.length; i++) {
    push(); // Save the current state of the transformation matrix
    translate(toruses[i].x, toruses[i].y, 0); // Move to the torus' position
    toruses[i].step();
    toruses[i].show();
    pop(); // Restore the previous state of the transformation matrix
  }
}

class Torus {
  constructor(x, y, radius, col) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.col = col; // Store the random color
  }

  show() {
    fill(this.col); // Set the color before drawing
     rotateX((frameCount + floor(random(1, 5))) * 0.01);
     rotateY((frameCount + floor(random(1, 5))) * 0.01);
	 smooth();
    torus(this.radius, 25);
  }

  step() {
    if (this.x < mouseX - width / 2) {
      this.x++;
    } else {
      this.x--;
    }
    if (this.y < mouseY - height / 2) {
      this.y++;
    } else {
      this.y--;
    }
  }
}
