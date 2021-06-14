
// // Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
// // You have not officially learned how to “loop” over code to repeat function calls… 
// if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. 
// If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// // At this point you should be using console.log() to display the results of each round and the winner at the end.
// // Use prompt() to get input from the user. Read the docs here if you need to.
// // Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// // Feel free to create more “helper” functions if you think it would be useful.

// computerPlay = () => Math.floor(Math.random() * 3);
function getRandomHand(){ return Math.floor(Math.random() * 3)};
// function computerPlay(){
//     if (parseInt(getRandomHand()) === 0) {
//         return "rock"; }
//         else if (getRandomHand() === 1) {
//         return "paper"; }
//         else {
//             return "scissors"} 
// }


// 0 = rock, 1 == paper, 2 == scissors


// player plays rock
playRock = () => {
    // console.log(`computer played ${computerPlay()}`)             need to pick from single pull
    if (getRandomHand()===0){return "draw";}
    else if (getRandomHand()===1){return "player wins";}
    else {return "computer wins";}}
// player plays paper
playPaper = () => {
    if (computerPlay()=0){return "computer wins";}
    else if (computerPlay()=1){return "draw";}
    else {return "player wins"}}
// player plays scissors
playScissors = () => {
    if (computerPlay()=0){return "Player wins";}
    else if (computerPlay()=1){return "Computer wins";}
    else {return "draw";}}
