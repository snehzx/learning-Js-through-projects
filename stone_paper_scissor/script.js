const choices = ["rock", "paper", "scissor"];
const player = document.getElementById("player");

const comp = document.getElementById("comp");
const result = document.getElementById("result");
const pscore = document.getElementById("pscore");
const cscore = document.getElementById("cscore");
const winner = document.getElementById("winner");
let psc = 0;
let csc = 0;

function playGames(playerChoice) {
  const compChoice = choices[Math.floor(Math.random() * 3)];
  let res = " ";
  if (playerChoice === compChoice) {
    res = "IT'S A TIE!";
  } else {
    switch (playerChoice) {
      case "rock":
        res = compChoice === "scissor" ? "YOU WIN!" : "YOU LOOSE!";
        break;
      case "scissor":
        res = compChoice === "paper" ? "YOU WIN!" : "YOU LOOSE!";
        break;
      case "paper":
        res = compChoice === "rock" ? "YOU WIN!" : "YOU LOOSE!";
        break;
    }
  }
  player.textContent = `PLAYER: ${playerChoice}`;
  comp.textContent = `COMPUTER: ${compChoice}`;
  result.textContent = res;
  result.classList.remove("greenText", "redText");
  result.classList.add("whiteText");

  switch (res) {
    case "YOU WIN!":
      result.classList.add("greenText");
      psc++;
      pscore.textContent = psc;
      if (psc === 5) {
        winner.textContent = `YOU ARE THE WINNER`;
        winner.style.display = "block";
        setTimeout(() => {
          winner.style.display = "none";
        }, 3000);
        psc = 0;
        csc = 0;
        pscore.textContent = 0;
        cscore.textContent = 0;
      }
      break;
    case "YOU LOOSE!":
      result.classList.add("redText");
      csc++;
      cscore.textContent = csc;
      if (csc === 5) {
        winner.textContent = `COMPUTER IS THE WINNER`;
        winner.style.display = "block";
        setTimeout(() => {
          winner.style.display = "none";
        }, 3000);
        psc = 0;
        csc = 0;
        cscore.textContent = 0;
        pscore.textContent = 0;
      }
      break;
  }
}
