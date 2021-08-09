function setup() {
  createCanvas(2000,8000);
  //background(0,0,0);
  fill(0,0,0);
  rect(0,0,2000,3000);
  rect(0,6000,2000,2000);
  fill(200,0,0);
  rect(2000,0,2000,3000);
}

let mousepos = 25;

function draw() {
  frameRate(6000);
  if (mousepos < 25){
    mousepos = 25;
  }
  fill(mousepos - 25);
  
  textSize(150);
  
  text('Encryption code',200,500);
  
  text('Encryption code',pos+200,500);
}

function mouseWheel(event) {
  print(mousepos);
  mousepos += event.delta;
  if (mousepos < 25){
    mousepos = 25;
  }
}
