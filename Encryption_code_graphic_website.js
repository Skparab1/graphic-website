function setup() {
  createCanvas(2000,8000);
  //background(0,0,0);
}

let mousepos = 25;

function draw() {
  clear();
  fill(0,0,0);
  rect(0,0,2000,1750);
  rect(0,6000,2000,2000);
  fill(200,0,0);
  rect(2000,0,2000,3000);
  
  frameRate(6000);
  if (mousepos < 25){
    mousepos = 25;
  }
  fill(mousepos - 25);
  
  textSize(150);
  
  text('Data security: Redefined',200,600);
  
  textSize(100);
  fill(mousepos - 100);
  
  text('Introducing Encryption code 2.2',200,900);
  
  fill(255);
  
  text('______________________',(mousepos/2)-1000,1400);
  text('______________________',(mousepos/-2)+1700,1400);
  text('______________________',(mousepos/2)-1000,1200);
  text('______________________',(mousepos/-2)+1700,1200);
  
  fill(mousepos - 500);
  text('All new features',700,1300);
}

function mouseWheel(event) {
  print(mousepos);
  mousepos += event.delta;
  if (mousepos < 25){
    mousepos = 25;
  }
}
