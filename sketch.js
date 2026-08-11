// We need an X and Y position to start in the middle
let x = 200;
let y = 200;

// We need a speed for BOTH directions
let speedX = 2;
let speedY = 3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  circle(x, y, 20); // Draw the circle at our x and y variables
  
  // Move the circle by adding the speed to the position
  x = x + speedX;
  y = y + speedY;
  
  // The Pac-Man Effect: If it goes off one edge, teleport it to the other
  if (x > 400) { x = 0; } // If it goes off the right, move to the left
  if (x < 0) { x = 400; } // If it goes off the left, move to the right
  if (y > 400) { y = 0; } // If it goes off the bottom, move to the top
  if (y < 0) { y = 400; } // If it goes off the top, move to the bottom
}