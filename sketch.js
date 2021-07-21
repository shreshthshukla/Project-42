var sp1, sp2, sp3, sp4
var issI, bg;
var hasDocked, iss, space;
function preload(){
 
  sp1 = loadImage("spacecraft1.png")
  sp2 = loadImage("spacecraft2.png")
  sp3 = loadImage("spacecraft3.png")
  sp4 = loadImage("spacecraft4.png")
  issI = loadImage("iss.png");
  bg = loadImage("spacebg.jpg")
}

function setup() {
  createCanvas(800,400);
  hasDocked = false;

  iss = createSprite(400, 150, 50, 50);
  iss.addImage(issI);
  iss.scale = 0.6

  space = createSprite(400,320,50,50);
  space.addImage(sp1)
  space.scale = 0.2;

  point = createSprite(355,170,30,30);
  point.visible=false;
}

function draw() {
  background(bg);  

  if(!hasDocked){

    if (keyDown("left")) {
      space.addImage(sp3);
      space.x = space.x - 5;
    }
    if (keyDown("right")) {
      space.addImage(sp4);
      space.x = space.x + 5;
    }
    if (keyDown("up")) {
      space.addImage(sp2);
      space.y = space.y - 5;
    }
    if (keyDown("down")) {
      space.addImage(sp1);
      // space.y = space.y + 5;
    }
  }
  if (space.isTouching(point)) {
    hasDocked = true;
    stroke("black");
    fill("white");
    textSize(50);
    textFont("Stargaze");
    text("!Docking Successfull!", 150, 300);
  }
  
  // text(mouseX+","+mouseY,200,200)

  drawSprites();
}