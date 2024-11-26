let koda1;
let koda2;
let koda3;
let koda4;


function preload() {
  koda1 = loadImage("koda1.png");
  koda2 = loadImage("koda2.png");
  koda3 = loadImage("koda3.png");
  koda4 = loadImage("koda4.png");
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight-90);
  canvas.parent("container");
 angleMode(DEGREES);

  
  }


  function draw() {
    frameRate(1)
    background(255, 224, 129)
     let koda=[koda1,koda2,koda3,koda4];
    
    let KX1=random(200,(width/2)-200)
    let KY1=random(200,(height/2)-200)
    let KX2=random((width/2),width-200)
    let KY2=random(200,(height/2)-200)
    let KX3=random(200,(width/2)-200)
    let KY3=random((height/2),height-200)
    let KX4=random((width/2)+200,width-200)
    let KY4=random((height/2),height-200)
  
    
   
    image(koda[(int(random(0,koda.length)))], KX1,
    KY1 ,200, 200);
  

   
    image(koda[(int(random(0,koda.length)))], KX2,
    KY2 ,200, 200);
    
  
    
    image(koda[(int(random(0,koda.length)))], KX3,
    KY3 ,200, 200);
    

    
    
    image(koda[(int(random(0,koda.length)))], KX4,
    KY4 ,200, 200);
    
    
  }  
  
  
  
