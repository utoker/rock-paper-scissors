//VARS
let btn = document.querySelectorAll(".btn");
let btnNewGame = document.querySelector(".new-game");
let playerHP = 100;
let computerHP = 100;
let playerHPBar = document.querySelector(".playerHP");
let eventText = document.querySelector(".event-text");
let computerHPBar = document.querySelector(".computerHP");
let rock = document.querySelector(".btn-rock");
let paper = document.querySelector(".btn-paper");
let scissors = document.querySelector(".btn-scissors");
//EVENTLISTENERS
rock.addEventListener("click", playRock);
paper.addEventListener("click", playPaper);
scissors.addEventListener("click", playScissors);
btnNewGame.addEventListener("click", newGame);
// FUNCTIONS
// 0 = rock, 1 == paper, 2 == scissor
computerPlay = () => Math.floor(Math.random() * 3);
function gameOver() {
  btnNewGame.style.display = "block";
  btn.forEach((btn) => (btn.style.display = "none"));
}
function newGame() {
  btn.forEach((btn) => (btn.style.display = "block"));
  btnNewGame.style.display = "none";
  playerHP = 100;
  computerHP = 100;
  playerHPBar.textContent = `${playerHP}`;
  computerHPBar.textContent = `${computerHP}`;
  eventText.textContent = "Fight!";
}
function playRock() {
  if (computerPlay() === 0) {
    eventText.textContent = "Computer played rock draw";
  } else if (computerPlay() === 1) {
    eventText.textContent = "Computer played paper you lost";
    playerHP -= 20;
    playerHPBar.textContent = `${playerHP}`;
    if (playerHP === 0) gameOver();
  } else {
    eventText.textContent = "Computer played scissors you won";
    computerHP -= 20;
    computerHPBar.textContent = `${computerHP}`;
    if (computerHP === 0) gameOver();
  }
}
function playPaper() {
  if (computerPlay() === 1)
    eventText.textContent = "Computer played paper draw";
  else if (computerPlay() === 2) {
    eventText.textContent = "Computer played scissors you lost";
    playerHP -= 20;
    playerHPBar.textContent = `${playerHP}`;
    if (playerHP === 0) gameOver();
  } else {
    eventText.textContent = "Computer played rock you won";
    computerHP -= 20;
    computerHPBar.textContent = `${computerHP}`;
    if (computerHP === 0) gameOver();
  }
}
function playScissors() {
  if (computerPlay() === 2)
    eventText.textContent = "Computer played scissors draw";
  else if (computerPlay() === 0) {
    eventText.textContent = "Computer played rock you lost";
    playerHP -= 20;
    playerHPBar.textContent = `${playerHP}`;
    if (playerHP === 0) gameOver();
  } else {
    eventText.textContent = "Computer played paper you won";
    computerHP -= 20;
    computerHPBar.textContent = `${computerHP}`;
    if (computerHP === 0) gameOver();
  }
}
