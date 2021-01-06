var dog,dogImage;
var happydog,happydogimg;
var foodS;
var database;
var foodstock;

function preload()
{
  //load images here
 dogImage = loadImage("images/dogimg.png");
 happydogImg = loadImage("images/dogimg1.png");
  
}
function setup() {
  database = firebase.database();
 
  createCanvas(800, 700);
   
foodstock = database.ref('foodS');
foodstock.on("value",readStock);
  dog = createSprite(360,300,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.2;

}  


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
//writeStock(foodS);
dog.addImage(happydogImg);

}
//writeStock();
//readStock();
  drawSprites();
  textSize(22);
  fill("red");
  text("press up arrow to feed drago milk",350,20);
  //add styles here

}
function readStock(){
  foodS = data.val();
}
function writeStock(){
  database.ref('/').update({
food:x
  })
} 



