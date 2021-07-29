class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h1');
    this.reset = createButton('Reset');
    this.title = createElement('h1');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    background(backgroundImage);
    this.title.html("Marathon");
    this.title.position(displayWidth/2 -50, 0);

    this.input.position(displayWidth/2 -40, displayHeight/2 -80);
    this.button.position(displayWidth/2 +40, displayHeight/2);
    this.reset.position(10, 10);

    this.button.mousePressed(() => {
      this.input.hide()
      this.button.hide()
      player.name = this.input.value()
      playerCount+= 1
      player.index = playerCount
      player.update()
      player.updateCount(playerCount)
      textSize(100)
      this.greeting.html(" Welcome " + player.name + " !! ");
      this.greeting.position(displayWidth/2 -100, displayHeight/4)
    })
      
    this.reset.mousePressed(() => {
    player.updateCount(0);
    game.update(0);
    player.updatefinishedPlayers(0);
    database.ref('/').update({
      players: null
    })
    })
    

   }
}
