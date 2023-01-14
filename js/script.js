
let playerChoice;
let computerChoice;

let playerScore = 0;
let computerScore = 0;

let roundResult = ""; // Needed so that roundResult.includes("quit program") can be evaluated

console.log(game());  // Run the program


/*
Generate and return a new computer choice - rock, paper, or scissors
*/
function getComputerChoice() {
  let randNum = Math.floor(Math.random()*3) + 1; // Random number - either 1 2 or 3
  if (randNum === 1) return "rock"
  else if (randNum === 2) return "paper"
  else if (randNum === 3) return "scissors"
  else console.log("An error occurred in getComputerChoice()")
}

/*
Evaluate a single round of rock paper scissors and return win/lose result
*/
function playSingleRound(playerSelection, computerSelection) {
  if (playerSelection === null) return "Prompt Canceled - enter 'quit' to exit program"
  else if (playerSelection.toLowerCase() === "quit") return "User quit program"
  else if (playerSelection.toLowerCase() === computerSelection) return "It's a tie! Try again"
  else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") return "You win! Rock beats Scissors";
  else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") return "You win! Paper beats Rock";
  else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") return "You win! Scissors beats Paper";
  else if (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") return "You lose! Rock beats Scissors";
  else if (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") return "You lose! Paper beats Rock";
  else if (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") return "You lose! Scissors beats Paper";
  else return "Please enter either rock, paper, or scissors"
}

/*
Play five rounds and return the overall winner/loser
*/
function game() {
  while (playerScore + computerScore < 5 && !(roundResult.includes("quit program"))) {
    playerChoice = prompt("enter rock paper or scissors");
    computerChoice = getComputerChoice();
    roundResult = playSingleRound(playerChoice, computerChoice);
    console.log(roundResult);
    if (roundResult.includes("win")) {
      playerScore++;
      console.log(`The score is ${playerScore} (player) vs ${computerScore} (computer)`);
    } else if (roundResult.includes("lose")) {
      computerScore++;
      console.log(`The score is ${playerScore} (player) vs ${computerScore} (computer)`);
    }
  }
  if (roundResult.includes("quit program")) return "bye bye"
  else if (playerScore > computerScore) return "YOU WON"
  else return "YOU LOST"
}






console.log(
  
);

console.log(
  
);

console.log(
  
);

console.log(
  
);

console.log(
  
);
  


 // if (playerChoice === "quit") {
      // return "User quit program";
    // }