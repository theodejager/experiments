let walker;
let slider;
function setup() {
	createCanvas(displayWidth, displayHeight, WEBGL);
  slider = createSlider(1, 20, 6);
  angleMode(DEGREES);
  noFill();
  stroke(32, 8, 64);

  walker = new Walker();
}

function draw() {
  background(220);
  orbitControl();
  walker.step();
  walker.show();
	frameRate(120);

}

class Walker {
  constructor() {
    this.points = [{x: 0, y: 0, z: 0}]; // Start at the origin
  }

  step() {
    let rx = randomGaussian();
    let ry = randomGaussian();
    let rz = randomGaussian();

    let lastPoint = this.points[this.points.length - 1];
    let newPoint = {
      x: lastPoint.x + rx,
      y: lastPoint.y + ry,
      z: lastPoint.z + rz
    };

    this.points.push(newPoint);
  }

  show() {
    stroke(0);
	 strokeWeight(slider.value());
    for (let i = 0; i < this.points.length; i++) {
      let p = this.points[i];
      point(p.x, p.y, p.z);
    }
  }
}
