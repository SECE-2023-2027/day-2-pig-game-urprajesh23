var selectPlayer = 1;
const rollButton = document.getElementById("rollButton");
const image = document.getElementById("dice");
const currentScorePlayer1 = document.getElementById("currentplayer-1");
const currentScorePlayer2 = document.getElementById("currentplayer-2");
const scorePlayer1 = document.getElementById("scoreplayer-1");
const scorePlayer2 = document.getElementById("scoreplayer-2");
const game = document.getElementById("game");
const holdButton = document.getElementById("holdButton");
const reset = document.getElementById("reset");

rollButton.addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 6) + 1;
  image.src = `/roll a dice/dice/dice${randomNumber}.jpg `;
  if (scorePlayer1 >= 100) {
    alert("player1 wins");
  }
  if (scorePlayer2 >= 100) {
    alert("player2 wins");
  }
  if (randomNumber === 1) {
    if (selectPlayer == 1) {
      scorePlayer1.innerHTML =
        Number(scorePlayer1.innerHTML) + Number(currentScorePlayer1.innerHTML);
      currentScorePlayer1.innerHTML = 0;
      game.style.background = `linear-gradient(
      90deg,
      rgba(186, 151, 176, 1) 50%,
      rgba(242, 218, 234, 1) 50%
    )`;
    } else {
      scorePlayer2.innerHTML =
        Number(scorePlayer2.innerHTML) + Number(currentScorePlayer2.innerHTML);
      currentScorePlayer2.innerHTML = 0;
      game.style.background = `linear-gradient(
      90deg,
      rgba(242, 218, 234, 1) 50%,
      rgba(186, 151, 176, 1) 50%
    )`;
    }

    selectPlayer = selectPlayer === 1 ? 0 : 1;
  } else {
    if (selectPlayer == 1) {
      currentScorePlayer1.innerHTML = randomNumber;
    } else {
      currentScorePlayer2.innerHTML = randomNumber;
    }
  }
});

holdButton.addEventListener("click", () => {
  if (selectPlayer == 1) {
    scorePlayer1.innerHTML =
      Number(scorePlayer1.innerHTML) + Number(currentScorePlayer1.innerHTML);
    currentScorePlayer1.innerHTML = 0;
    game.style.background = `linear-gradient(
      90deg,
      rgba(186, 151, 176, 1) 50%,
      rgba(242, 218, 234, 1) 50%
    )`;
  } else {
    scorePlayer2.innerHTML =
      Number(scorePlayer2.innerHTML) + Number(currentScorePlayer2.innerHTML);
    currentScorePlayer2.innerHTML = 0;
    game.style.background = `linear-gradient(
      90deg,
      rgba(242, 218, 234, 1) 50%,
      rgba(186, 151, 176, 1) 50%
    )`;
  }
  selectPlayer = selectPlayer === 1 ? 0 : 1;
});

reset.addEventListener("click", () => {
  currentScorePlayer1.innerHTML = 0;
  currentScorePlayer2.innerHTML = 0;
  scorePlayer1.innerHTML = 0;
  scorePlayer2.innerHTML = 0;
  selectPlayer = 1;
  game.style.background = `linear-gradient(
      90deg,
      rgba(242, 218, 234, 1) 50%,
      rgba(186, 151, 176, 1) 50%
    )`;
});
