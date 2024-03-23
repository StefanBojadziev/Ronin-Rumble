function rectangularCollision({ rectangle1, rectangle2 }) {
  return (
    rectangle1.attackBox.position.x + rectangle1.attackBox.width >=
      rectangle2.position.x && //AttackBox Right side hits Enemy Left side
    rectangle1.attackBox.position.x <=
      rectangle2.position.x + rectangle2.width && //AttackBox Left side hits Enemy Right side
    rectangle1.attackBox.position.y + rectangle1.attackBox.height >=
      rectangle2.position.y && //AttackBox Bottom side hits Enemy Top side
    rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height //AttackBox Top side hits Enemy Bottom side
  );
}

let winner = "TIE";
function determineWinner({ player, enemy, timerId }) {
  clearTimeout(timerId);
  document.querySelector("#winner").style.display = "flex";
  if (player.health === enemy.health) {
    winner = "TIE";
    document.querySelector("#winner").textContent = winner + "!";
  } else if (player.health > enemy.health) {
    winner = "PLAYER 1";
    document.querySelector("#winner").textContent = winner + " HAS WON!";
  } else if (player.health < enemy.health) {
    winner = "PLAYER 2";
    document.querySelector("#winner").textContent = winner + " HAS WON!";
  }
}

let timer = 60;
let timerId;
function decreaseTimer() {
  if (timer > 0) {
    timerId = setTimeout(decreaseTimer, 1000);
    timer -= 1;
    document.querySelector("#timer").textContent = timer;
  } else {
    determineWinner({ player, enemy, timerId });
  }
}
