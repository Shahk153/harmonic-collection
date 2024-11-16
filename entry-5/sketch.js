let yPos = []
let xPos = []
let ySpeed = []
let xSpeed = []
let radius=90

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight-90);
  canvas.parent("container");
 

  for(let i = 0; i < 15; i ++){
    xPosNow = random(0+radius/2, width-radius/2)
    xPos.push(xPosNow)
    
    yPosNow = random(0+radius/2, height-radius/2)
    yPos.push(yPosNow)

   xSpeedNow = random(2, 5)
    xSpeed.push(xSpeedNow)
    
    ySpeedNow = random(2, 5)
    ySpeed.push(ySpeedNow)
  }
}

function draw() {
  background(56, 56, 251);
  
  for(let i = 0; i < 15; i ++){
    noStroke()
    fill(144, 238, 144)
    ellipse(xPos[i], yPos[i], radius)
 xPos[i]+=xSpeed[i]
    yPos[i]+=ySpeed[i]
     if(xPos[i]>width-radius/2 || xPos[i]<radius/2){
   xSpeed[i]*=-1
   }
       if(yPos[i]>height-radius/2 || yPos[i]<radius/2){
   ySpeed[i]*=-1
   }
   for (let j = i + 1; j < xPos.length; j++) {
    let dx = xPos[i] - xPos[j];
    let dy = yPos[i] - yPos[j];
    let distance = sqrt(dx * dx + dy * dy);
    
    if (distance < radius) { // Collision detected
      // Swap speeds (simplified response)
      let tempXSpeed = xSpeed[i];
      let tempYSpeed = ySpeed[i];
      xSpeed[i] = xSpeed[j];
      ySpeed[i] = ySpeed[j];
      xSpeed[j] = tempXSpeed;
      ySpeed[j] = tempYSpeed;
      
      // Separate overlapping ellipses
      let overlap = radius - distance;
      let halfOverlap = overlap / 2;
      let angle = atan2(dy, dx);
      xPos[i] += cos(angle) * halfOverlap;
      yPos[i] += sin(angle) * halfOverlap;
      xPos[j] -= cos(angle) * halfOverlap;
      yPos[j] -= sin(angle) * halfOverlap;
    }
  }
}
    
  
  
  
}