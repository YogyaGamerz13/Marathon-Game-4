class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      rank:this.rank, 
      index:this.index
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  getFinishedPlayers(){
    var finishedPlayersRef = database.ref('finishedplayers')
    finishedPlayersRef.on("value", (data)=>{
      finishedPlayers = data.val();
    })
  }

  updatefinishedPlayers(value){
  database.ref('/').update({
  finishedplayers: value
  })
  this.rank += 1

}

}