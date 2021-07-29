class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    runner1 = createSprite(100, 200)
    runner1.addImage('Runner1', runner1Image)
    runner1.scale = 0.18
    runner2 = createSprite(300, 200)
    runner2.addImage('Runner2', runner2Image)
    runner2.scale = 0.25
    runner3 = createSprite(500, 200)
    runner3.addImage('Runner3', runner3Image)
    runner3.scale = 0.25
    runner4 = createSprite(700, 200)
    runner4.addImage('Runner4', runner4Image)
    runner4.scale = 0.25
    runners = [runner1, runner2, runner3, runner4]
  }

  play(){
    background(groundImage)
    form.hide();
    Player.getPlayerInfo();
    player.getFinishedPlayers()

    if(allPlayers !== undefined){
      image(trackImage, 0, 50, displayWidth*5, displayHeight/2)
      var index = 0
      var y = 35
      var x
      for(var plr in allPlayers){
        index = index +1
        x = allPlayers[plr].distance +100
        y = y +100
        runners[index -1]. x = x
        runners[index -1]. y = y
        if(index === player.index){
          fill("red")
          ellipse(x, y, 60, 60)
          camera.position.x = runners[index -1].x +(displayWidth/4)
          camera.position.y = (displayHeight/2)

        }
        textSize(15);
        text(allPlayers[plr].name, runners[index -1]. x -75, runners[index -1]. y)
      }
    }

    if(keyIsDown(RIGHT_ARROW) && player.index !== null){
     if(player.distance < 7000 && passedFinish === false){
       player.distance += 30
     }

    else if(player.distance > 7000 && passedFinish === false){
      finishedPlayers += 1
      player.updatefinishedPlayers(finishedPlayers);
      player.rank = finishedPlayers;
      passedFinish = true;
    }
    
    player.update();

    }

    drawSprites();

  }

  displayRank(){
    camera.position.x = 0;
    camera.position.y = 0;
    clear()
  }

}