// 0 = rock, 1 == paper, 2 == scissor

computerPlay = () => Math.floor(Math.random() * 3);

function playRock() {
  if (computerPlay() === 0) return console.log(`draw`);
  else if (computerPlay() === 1) return console.log(`player lost`);
  else return console.log(`player won`);
}
function playPaper() {
  if (computerPlay() === 1) return console.log(`draw`);
  else if (computerPlay() === 2) return console.log(`player lost`);
  else return console.log(`player won`);
}
function playScissors() {
  if (computerPlay() === 2) return console.log(`draw`);
  else if (computerPlay() === 0) return console.log(`player lost`);
  else return console.log(`player won`);
}
let rock = document.querySelector(".btn-rock");
rock.addEventListener("click", playRock);
let paper = document.querySelector(".btn-paper");
paper.addEventListener("click", playPaper);
let scissors = document.querySelector(".btn-scissors");
scissors.addEventListener("click", playScissors);
