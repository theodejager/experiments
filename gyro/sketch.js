let x, y, vx = 0, vy = 0;

function setup() {
  createCanvas(displayWidth, displayHeight);
  x = width / 2;
  y = height / 2;
  noStroke();
}

function draw() {
  background(0, 40);           // motion-blur trail
  vx += accelerationX * 0.4;   // tilt pushes the ball
  vy += accelerationY * 0.4;
  vx *= 0.95;                  // friction
  vy *= 0.95;
  x += vx;
  y += vy;
  if (x < 30 || x > width - 30)  vx *= -0.8;  // bounce
  if (y < 30 || y > height - 30) vy *= -0.8;
  x = constrain(x, 30, width - 30);
  y = constrain(y, 30, height - 30);
  fill(255);
  circle(x, y, 60);
}
