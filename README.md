# first-boid
# Boids Flocking Simulation 🐦

**https://njagithuku.github.io/first-boid/

*(Drag and drop a 5-second GIF of your project running right here!)*

Project to learn about vector mathematics and "emergent behavior", how you can write a few incredibly simple rules and get something that looks like artificial life. 

Built entirely in JavaScript using the p5.js library.

## How the Math Works
There are no preset flight paths. Every "boid" (the little triangles) is an independent object tracking its own Position, Velocity, and Acceleration using 2D vectors. 

Every frame, a boid looks at the neighbors inside its perception radius and updates its steering based on just three rules:

1. **Separation:** Don't crash into the boids right next to you.
2. **Alignment:** Look at the average direction your neighbors are flying, and turn that way.
3. **Cohesion:** Try to steer toward the center of the group so you don't get left behind.

Add those three steering vectors together, apply them to the boid's velocity, and suddenly it looks like a real flock of birds.

## The Big O Problem (Why it lags)
Right now, the algorithm is naive. Every single frame, every boid checks its exact distance against *every other boid* on the canvas to see if they are close enough to care about. 

That means the time complexity is **O(n²)**. If I put 150 boids on the screen at 60 FPS, the browser is crunching over 1.3 million distance calculations a second, which is a great way to turn a laptop into a microwave.

**Next Steps:**
To optimize this and run thousands of boids at once, I plan to implement a **Quadtree** spatial partitioning algorithm. This will divide the screen into a grid so a boid only checks the math for neighbors in its immediate area, dropping the complexity down to `O(n log n)`.

## Run it locally
No build steps or Node modules required. 
1. Clone the repo.
2. Open `index.html` in your web browser. 
3. That's it.
