var monkeyimg, backimg, rockimg, bannaimg;
var monkey, back, invisground, rock, banna;
var bannaG, rockG;
var gamestate = "play"


function preload() {
  monkeyimg = loadAnimation(
    "sprite_0.png",
    "sprite_1.png",
    "sprite_2.png",
    "sprite_3.png",
    "sprite_4.png",
    "sprite_5.png",
    "sprite_6.png",
    "sprite_7.png",
    "sprite_8.png"
  );
  backimg = loadImage("jungle2.jpg");
  rockimg = loadImage("obstacle.png");
  bannaimg = loadImage("banana.png");
}

function setup() {
  createCanvas(600, 600);
  monkey = createSprite(150, 450, 20, 50);
  monkey.addAnimation("running", monkeyimg);
  monkey.scale = 0.2;

  invisground = createSprite(300, 510, 1000, 1);
  invisground.visible = false;
  bannaG = createGroup();
  rockG = createGroup();
}

function draw() {
  background(backimg);
  if (gamestate=="play"){
  if (keyDown("space") && monkey.y > 430) {
      monkey.velocityY = -7;
    }

    if (rockG.isTouching(monkey)){
     gamestate = "end"
     }

    rocky();
    bannnnna();
    monkey.velocityY = monkey.velocityY + 0.2;
    bannaG.collide(invisground);

  }

  if (gamestate == "end"){
    rockG.setVelocityXEach(0);
    bannaG.setVelocityXEach(0);
    rockG.setLifetimeEach(-567890);
    bannaG.setLifetimeEach(-567890);
  }
  

  monkey.collide(invisground);

  drawSprites();
  
  
 
}

function rocky() {
  if (frameCount % 70 == 0) {
    rock = createSprite(700, 450);
    rock.addImage("rockthing", rockimg);
    rock.scale = 0.2;
    rock.velocityX = -6;
    rock.lifetime = 150;
    rockG.add(rock)
  
  }
}

function bannnnna() {
  if (frameCount % 30 == 0) {
    banna = createSprite(700, 20);
    banna.x = Math.round(random(300, 550));
    banna.addImage("bannnnnnnnnnaaaaa", bannaimg);
    banna.scale = 0.1;

    banna.velocityY = 8;
    banna.velocityX = -3;
    banna.lifetime = 150;

    bannaG.add(banna);
  }
}
