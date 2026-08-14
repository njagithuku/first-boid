let flock = [];

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < 100; i++) {
    flock.push(new Boid());
  }
}

function draw() {
  background(220);
  
  for (let boid of flock) {
    boid.move();
    boid.show();
  }
}

//UPDATED BLUEPRINT
class Boid {
  constructor() {
    // createVector bundles X and Y together
    this.position = createVector(random(width), random(height));
    
    // Velocity is our speedX and speedY bundled together
    this.velocity = createVector(random(-3, 3), random(-3, 3));
  }
  
  move() {
    // Instead of doing x + speedX and y + speedY, Vectors do it in one line:
    this.position.add(this.velocity);
    
    // Pac-Man wrapping
    if (this.position.x > width) this.position.x = 0;
    if (this.position.x < 0) this.position.x = width;
    if (this.position.y > height) this.position.y = 0;
    if (this.position.y < 0) this.position.y = height;
  }
  
  show() {
    // 1. Ask the velocity vector what angle it is pointing
    let angle = this.velocity.heading();
    
    // 2. Rotation Trick
    push(); // Save the normal, un-rotated canvas
    
    translate(this.position.x, this.position.y); // Move our paintbrush to the boid's location
    rotate(angle); // Spin the canvas to match the boid's angle
    
    // Draw a triangle pointing to the right (which matches our angle)
    fill(50, 150, 255);
    triangle(10, 0, -5, 5, -5, -5); 
    
    pop(); // Restore the canvas back to normal
  }
}