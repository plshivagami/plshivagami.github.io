var lives = 3;

function shivaPumpkinSmash(inputAction, id){
  if(inputAction === 'candle'){
      document.getElementById(id).innerHTML = "🕯";
      lives = lives - 1;
      alert("Sorry you lost a life. now you have "+ lives +" remaining");
      if(lives === 0){
        alert("Sorry you lost, Try again");
        lives=3;
      }

  }
  else if (inputAction === 'skull') {
    document.getElementById(id).innerHTML = "💀";
    alert("Sorry you lost, Try again");
    lives = 3;
  }
  else if (inputAction === 'pumpkin'){
    document.getElementById(id).innerHTML = "🎃";
    alert("Congratulations you won!!!");
    lives = 3;
  }
}

function resetGame(){
  alert("Reloading Game");
  lives = 3;
}
