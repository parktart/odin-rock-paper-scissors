"use strict";

// const rockBtn = document.querySelector("button.rock");
// const paperBtn = document.querySelector("button.paper");
// const scisBtn = document.querySelector("button.scissors");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    playSingleRound(e.target.textContent, getComputerChoice());
    updateScore();
  })
});


/*
Generate and return a new computer choice - rock, paper, or scissors
*/
function getComputerChoice() {
  let randNum = Math.floor(Math.random()*3) + 1; // Random number - either 1 2 or 3
  return (randNum === 1) ? "rock"
  : (randNum === 2) ? "paper"
  : (randNum === 3) ? "scissors"
  : console.log("error");
}


/*
Evaluate a single round of rock paper scissors and display win/lose result
*/
const displayDiv = document.querySelector("div.display");

function playSingleRound(playerSelection, computerSelection) {
  let playerSelectionLC = playerSelection.toLowerCase();
  displayDiv.textContent = (playerSelectionLC === computerSelection) ? "It's a tie! Try again"
  : (playerSelectionLC === "rock" && computerSelection === "scissors") ? "You win! Rock beats Scissors"
  : (playerSelectionLC === "paper" && computerSelection === "rock") ? "You win! Paper beats Rock"
  : (playerSelectionLC === "scissors" && computerSelection === "paper") ? "You win! Scissors beats Paper"
  : (computerSelection === "rock" && playerSelectionLC === "scissors") ? "You lose! Rock beats Scissors"
  : (computerSelection === "paper" && playerSelectionLC === "rock") ? "You lose! Paper beats Rock"
  : (computerSelection === "scissors" && playerSelectionLC === "paper") ? "You lose! Scissors beats Paper"
  : console.log("error");
}


/*
track and display score
*/
let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.querySelector("div.player > p");
const computerScoreBoard = document.querySelector("div.computer > p");

function updateScore() {
  let roundResult = displayDiv.textContent;
  if (roundResult.includes("win")) {
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  } else if (roundResult.includes("lose")) {
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }
  if (playerScore === 5) return "YOU WON"
  else if (computerScore === 5) return "YOU LOST"
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
  

