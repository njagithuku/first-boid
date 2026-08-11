let flock = []; // empty list

function setup() {
  createCanvas(400, 400);
  
  // "for loop" that repeats 100 times
  for (let i = 0; i < 100; i++) {
    flock.push(new Boid()); // Stamp out a new boid and add it to the list
  }
}

function draw() {
  background(220);
  
  // Tell every boid in the flock list to act
  for (let boid of flock) {
    boid.move();
    boid.show();
  }
}

// blueprint class
class Boid {
  // 'constructor' 
  constructor() {
    this.x = random(width);      // Start at a random X on the screen
    this.y = random(height);     // Start at a random Y on the screen
    this.speedX = random(-3, 3); // Random speed left or right
    this.speedY = random(-3, 3); // Random speed up or down
  }
  
  //instructions for how a boid moves
  move() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
    
    // Pac-Man wrapping (using 'width' and 'height' instead of hard numbers)
    if (this.x > width) this.x = 0;
    if (this.x < 0) this.x = width;
    if (this.y > height) this.y = 0;
    if (this.y < 0) this.y = height;
  }
  
  // instructions 
  show() {
    fill(50, 150, 255); // Colors it blue!
    circle(this.x, this.y, 10);
  }
}