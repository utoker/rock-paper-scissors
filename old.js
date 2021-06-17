// // computerPlay = () => Math.floor(Math.random() * 3);
// // function computerPlay(){
// //     if (parseInt(getRandomHand()) === 0) {
// //         return "rock"; }
// //         else if (getRandomHand() === 1) {
// //         return "paper"; }
// //         else {
// //             return "scissors"}
// // }

// let game = { playerScore: 5, computerScore: 5, status: "" };

// // 0 = rock, 1 == paper, 2 == scissors
// function getRandomHand() {
//   return Math.floor(Math.random() * 3);
// }
// // player plays rock
// playRock = () => {
//   if (getRandomHand() === 0) {
//     return (game.status = "Computer played rock => draw");
//   } else if (getRandomHand() === 1) {
//     return [
//       game.computerScore--,
//       (game.status = "Computer played paper => player wins"),
//     ];
//   } else {
//     return [
//       game.playerScore--,
//       (game.status = "Computer played scissors => computer wins"),
//     ];
//   }
// };
// // player plays paper
// playPaper = () => {
//   if (computerPlay() == 0) {
//     return [
//       game.playerScore--,
//       (game.status = "Computer played rock => computer wins"),
//     ];
//   } else if (computerPlay() == 1) {
//     return (game.status = "Computer played paper => draw");
//   } else {
//     return [
//       game.computerScore--,
//       (game.status = "Computer played scissors => player wins"),
//     ];
//   }
// };
// // player plays scissors
// playScissors = () => {
//   if (computerPlay() == 0) {
//     return (game.status = "Computer played rock => Player wins");
//   } else if (computerPlay() == 1) {
//     return (game.status = "Computer played paper => Computer wins");
//   } else {
//     return (game.status = "Computer played scissors => draw");
//   }
// };

// //game over
// // if (game.computerScore && game.playerScore == 0) {
// //     if (game.computerScore==0) {"you won";}
// //     else {"you lost"}
// // } else ("")
