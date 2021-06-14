
// // Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// // You have not officially learned how to “loop” over code to repeat function calls… 
// if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. 
// If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// // At this point you should be using console.log() to display the results of each round and the winner at the end.
// // Use prompt() to get input from the user. Read the docs here if you need to.
// // Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// // Feel free to create more “helper” functions if you think it would be useful.

// computerPlay = () => Math.floor(Math.random() * 3);
// function computerPlay(){
//     if (parseInt(getRandomHand()) === 0) {
//         return "rock"; }
//         else if (getRandomHand() === 1) {
//         return "paper"; }
//         else {
//             return "scissors"} 
// }


let game = {playerScore: 5, computerScore: 5};


// 0 = rock, 1 == paper, 2 == scissors
function getRandomHand(){ return Math.floor(Math.random() * 3)};
// player plays rock
playRock = () => {
    if (getRandomHand()===0){return 0,"Computer played rock => draw"}
    else if (getRandomHand()===1)[game.playerScore -- , game.status = "Computer played paper => player wins", console.log(game.playerScore),console.log(game.status)]
    else {return 2,"Computer played scissors => computer wins";}}
// player plays paper
playPaper = () => {
    if (computerPlay()=0){return "Computer played rock => computer wins";}
    else if (computerPlay()=1){return "Computer played paper => draw";}
    else {return 2,"Computer played scissors => player wins"}}
// player plays scissors
playScissors = () => {
    if (computerPlay()=0){return "Computer played rock => Player wins";}
    else if (computerPlay()=1){return "Computer played paper => Computer wins";}
    else {return "Computer played scissors => draw";}}

