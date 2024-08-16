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
		this.tradius = 20000;
		this.x = width/2;
		this.y = height/2;
		this.radius = 30;
		this.randomDeviation = 0.01;
	 }

	 step() {
		let baseStepSize = 10;
		let offSetX = map(noise(this.tx), 0, 1, -baseStepSize, baseStepSize);
		let offSetY = map(noise(this.ty), 0, 1, -baseStepSize, baseStepSize);

		if ( ( this.x + offSetX ) > width ) {
			this.x = 0;
		}
		if ( ( this.x + offSetX ) < 0 ) {
			this.x = width;
		}

		if ( ( this.y + offSetY ) > height ) {
			this.y = 0;
		}
		if ( ( this.y + offSetY ) < 0 ) {
			this.y = height;
		}
		this.radius = map( noise(this.tradius), 0, 1, 10, 100);
		this.x += offSetX;
		this.y += offSetY;
		this.tx += this.randomDeviation;
		this.ty += this.randomDeviation;
		this.tradius += this.randomDeviation;
	}


	 show() {
		 ellipse(this.x, this.y, this.radius, this.radius);
	 }
 }
