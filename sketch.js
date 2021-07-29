var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var backgroundImage

var form, player, game;

var runner1, runner2, runner3, runner4, runners;

var runner1Image, runner2Image, runner3Image, runner4Image, groundImage, trackImage, leaderboardImage;

var finishedPlayers = 0;

var passedFinish = false;

function preload(){
  backgroundImage = loadImage('images/Marathon.jpg')
  runner1Image = loadGif("images/Runner1.gif")
  runner2Image = loadGif("images/Runner2.gif")
  runner3Image = loadGif("images/Runner3.gif")
  runner4Image = loadGif("images/Runner4.gif")
  groundImage = loadImage("images/ground.png")
  trackImage = loadImage("images/tracktemp.png")
  leaderboardImage = loadImage("images/Leaderboard-background-1.jpg")
}


function setup(){
  canvas = createCanvas(displayWidth -20, displayHeight -200);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(gameState === 1){
    clear();
    game.play();
  }
  //start the game
  if(finishedPlayers === 0 && playerCount === 4){
    game.update(1)
  }

  if(finishedPlayers === 4){
    game.update(2)
  }

  if(finishedPlayers === 4 && gameState === 2){
    game.displayRank()
  }
   
}