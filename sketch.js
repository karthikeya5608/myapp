var enemyimage,enemy,enemy1;
var width,height,bg;

function preload(){
    bg=loadImage("background.png")
 enemyimage =loadImage("druid/ezgif.com-gif-maker.gif");
 enemy = createImg("druid/ezgif.com-gif-maker.gif");
}

function setup(){
    createCanvas(1365,653);
    enemy1=createSprite(700,200,100,100);
    enemy1.visible=false;

}

function draw(){
    background(bg);
    enemy1.x=mouseX;
    enemy1.y=mouseY;
  //  enemy1.velocityX=3;
    enemy.position(enemy1.x-100,enemy1.y-150);

    drawSprites();
}