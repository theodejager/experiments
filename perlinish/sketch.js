function setup() {
	createCanvas(displayWidth, displayHeight);
	walker = new Walker();
 }

 function draw() {
 //   background(220);

	walker.step();
	walker.show();
 }

 class Walker {

	 constructor() {
		this.tx = 0;
		this.ty = 10000;
		this.x = width/2;
		this.y = height/2;
	 }

	 step() {
		let baseStepSize = 10;
		let offSetX = map(noise(this.tx), 0, 1, -baseStepSize, baseStepSize);
		let offSetY = map(noise(this.ty), 0, 1, -baseStepSize, baseStepSize);

		if ( ( this.x + offSetX ) > width ) {
			offSetX = - Math.abs(offSetX);
		}
		if ( ( this.x + offSetX ) < 0 ) {
			offSetX = Math.abs(offSetX);
		}

		if ( ( this.y + offSetY ) > height ) {
			offSetY = - Math.abs(offSetY);
		}
		if ( ( this.y + offSetY ) < 0 ) {
			offSetY = Math.abs(offSetY);
		}

		this.x += offSetX;
		this.y += offSetY;
		this.tx += 0.01;
		this.ty += 0.01;
	}


	 show() {
		 ellipse(this.x, this.y, 30, 30);
	 }
 }
