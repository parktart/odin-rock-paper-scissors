
console.log(game());  // Run the program


/*
Generate and return a new computer choice - rock, paper, or scissors
*/
function getComputerChoice() {
  let randNum = Math.floor(Math.random()*3) + 1; // Random number - either 1 2 or 3
  return (randNum === 1) ? "rock"
  : (randNum === 2) ? "paper"
  : (randNum === 3) ? "scissors"
  : "An error occurred";
}

/*
Evaluate a single round of rock paper scissors and return win/lose result
*/
function playSingleRound(playerSelection, computerSelection) {
  return (playerSelection.toLowerCase() === computerSelection) ? "It's a tie! Try again"
  : (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") ? "You win! Rock beats Scissors"
  : (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") ? "You win! Paper beats Rock"
  : (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") ? "You win! Scissors beats Paper"
  : (computerSelection === "rock" && playerSelection.toLowerCase() === "scissors") ? "You lose! Rock beats Scissors"
  : (computerSelection === "paper" && playerSelection.toLowerCase() === "rock") ? "You lose! Paper beats Rock"
  : (computerSelection === "scissors" && playerSelection.toLowerCase() === "paper") ? "You lose! Scissors beats Paper"
  : "Please enter either rock, paper, or scissors";
}

/*
Play five rounds and return the overall winner/loser
*/
function game() {
  let playerChoice = "";
  let computerChoice = "";
  let roundResult = "";
  let playerScore = 0;
  let computerScore = 0;
  while (playerScore < 3 && computerScore < 3) {
    playerChoice = prompt("enter rock paper or scissors");
    if (playerChoice === null) {
      console.log("Prompt Canceled - enter 'quit' to exit program");
    } else if (playerChoice.toLowerCase() === "quit") {
      return "User quit program";
    } else {
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
  }
  if (playerScore > computerScore) return "YOU WON"
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
  

