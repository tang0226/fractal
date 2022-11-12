/******************************
FRACTAL PROTOTYPES: THEORETICAL MATHEMATICAL SETS IN THE COMPLEX PLANE
******************************/ 

var Julia = function(c) {
	this.c = c;
	
	this.f = function(z) {
		return z.mul(z).add(this.c);
	};
	
	this.iterate = function(Z, iterations, smoothColoring) {
		let z = Z;
		let n = 0;
		z = this.f(z);
		while(z.abs() <= 2 && n < iterations) {
			z = this.f(z);
			n++;
		}
		if(n < iterations && smoothColoring) {
			return n + 1 - log(log(z.abs())) / log(2);
		}
		return n;
	};
};

var MultiJulia = function(c, e) {
	this.c = c;
	this.e = e;
	
	this.f = function(z) {
		return z.exp(e).add(this.c);
	};
	
	this.iterate = function(Z, iterations, smoothColoring) {
		let z = Z;
		let n = 0;
		z = this.f(z);
		while(z.abs() <= 2 && n < iterations) {
			z = this.f(z);
			n++;
		}
		if(n < iterations && smoothColoring) {
			return n + 1 - log(log(z.abs())) / log(this.e);
		}
		return n;
	};
};

var Mandelbrot = function() {
	this.f = function(z, c) {
		return z.exp(2).add(c);
	};
	
	this.iterate = function(c, iterations, smoothColoring) {
		let z = new Complex(0, 0);
		let n = 0;
		while(z.abs() <= 2 && n < iterations) {
			z = this.f(z, c);
			n++;
		}
		if(n < iterations && smoothColoring) {
			return n + 1 - log(log(z.abs())) / log(2);
		}
		return n;
	};
};

var Multibrot = function(e) {
	this.e = e;
	
	this.f = function(z, c) {
		return z.exp(this.e).add(c);
	};
	
	this.iterate = function(c, iterations, smoothColoring) {
		let z = new Complex(0, 0);
		let n = 0;
		while(z.abs() <= 2 && n < iterations) {
			z = this.f(z, c);
			n++;
		}
		if(n < iterations && smoothColoring) {
			return n + 1 - log(log(z.abs())) / log(this.e);
		}
		return n;
	};
};

var BurningShip = function() {
	this.f = function(z, c) {
		return (new Complex(abs(z.re), abs(z.im))).exp(2).add(c);
	};

	this.iterate = function(c, iterations, smoothColoring) {
		let z = new Complex(0, 0);
		let n = 0;
		while(z.abs() <= 2 && n < iterations) {
			z = this.f(z, c);
			n++;
		}
		if(n < iterations && smoothColoring) {
			return n + 1 - log(log(z.abs())) / log(2);
		}
		return n;
	};
};

var MultiShip = function(e) {
	this.e = e;
	
	this.f = function(z, c) {
		return (new Complex(abs(z.re), abs(z.im))).exp(this.e).add(c);
	};

	this.iterate = function(c, iterations, smoothColoring) {
		let z = new Complex(0, 0);
		let n = 0;
		while(z.abs() <= 2 && n < iterations) {
			z = this.f(z, c);
			n++;
		}
		if(n < iterations && smoothColoring) {
			return n + 1 - log(log(z.abs())) / log(this.e);
		}
		return n;
	};
};

var BSJulia = function(c) {
	this.c = c;
	
	this.f = function(z) {
		return (new Complex(abs(z.re), abs(z.im))).exp(2).add(this.c);
	};
	
	this.iterate = function(Z, iterations, smoothColoring) {
		let z = Z;
		let n = 0;
		z = this.f(z);
		while(z.abs() <= 2 && n < iterations) {
			z = this.f(z);
			n++;
		}
		if(n < iterations && smoothColoring) {
			return n + 1 - log(log(z.abs())) / log(2);
		}
		return n;
	};
};