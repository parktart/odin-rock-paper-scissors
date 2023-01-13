
let playerChoice;
let computerChoice;

playerChoice = "rOck";
computerChoice = getComputerChoice();


/*
Generate and return a new choice for the computer - rock, paper, or scissors
*/
function getComputerChoice() {
  let randNum = Math.floor(Math.random()*3) + 1; // Random number - either 1 2 or 3
  if (randNum === 1) return "rock"
  else if (randNum === 2) return "paper"
  else if (randNum === 3) return "scissors"
  else return "An error occurred"
}


/*
Evaluate a single round of rock paper scissors and return win/lose result
*/
function playSingleRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) return "It's a tie! Try again"
  else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") return "You win! Rock beats Scissors";
  else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") return "You win! Paper beats Rock";
  else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") return "You win! Scissors beats Paper";
  else if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") return "You lose! Rock beats Scissors";
  else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") return "You lose! Paper beats Rock";
  else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") return "You lose! Scissors beats Paper";
  else return "An error occurred"
}




console.log(
  playerChoice
);

console.log(
  computerChoice
);

console.log(
  playSingleRound(playerChoice, computerChoice)
);

console.log(
  
);

console.log(
  
);
  


