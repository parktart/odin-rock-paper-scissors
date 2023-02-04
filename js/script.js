"use strict";

const buttons = document.querySelectorAll(".buttons > button");
const resultDiv = document.querySelector("div.result");

addListeners();

function addListeners() {
  buttons.forEach((button) => {
    button.addEventListener("click", playSingleRound)
  });
}

function removeListeners() {
  buttons.forEach((button) => {
    button.removeEventListener("click", playSingleRound);
  });
}

function playSingleRound(e) {
  const playerChoice = e.target.textContent;
  const computerChoice = getComputerChoice();
  const roundResult = getRoundResult(playerChoice, computerChoice);

  resultDiv.textContent = roundResult;
  updateScore(roundResult);
  const winner = checkForWinner();
  if (winner) {
    displayWinner(winner);
    addResetBtn();
    removeListeners();
  }
}

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
Evaluate a single round of rock paper scissors and return win/lose result
*/
function getRoundResult(playerSelection, computerSelection) {
  let playerSelectionLC = playerSelection.toLowerCase();
  return (playerSelectionLC === computerSelection) ? "It's a tie! Try again"
  : (playerSelectionLC === "rock" && computerSelection === "scissors") ? "You win! Rock beats Scissors"
  : (playerSelectionLC === "paper" && computerSelection === "rock") ? "You win! Paper beats Rock"
  : (playerSelectionLC === "scissors" && computerSelection === "paper") ? "You win! Scissors beats Paper"
  : (computerSelection === "rock" && playerSelectionLC === "scissors") ? "You lose! Rock beats Scissors"
  : (computerSelection === "paper" && playerSelectionLC === "rock") ? "You lose! Paper beats Rock"
  : (computerSelection === "scissors" && playerSelectionLC === "paper") ? "You lose! Scissors beats Paper"
  : console.log("error");
}

/*
Track and display score
*/
let playerScore = 0;
let computerScore = 0;

const playerScoreBoard = document.querySelector("div.player > p");
const computerScoreBoard = document.querySelector("div.computer > p");

function updateScore(roundResultP) {
  if (roundResultP.includes("win")) {
    playerScore++;
    playerScoreBoard.textContent = playerScore;
  } else if (roundResultP.includes("lose")) {
    computerScore++;
    computerScoreBoard.textContent = computerScore;
  }
}

/*
Check for a winner
*/
function checkForWinner() {
  if (playerScore === 3) return "player"
  else if (computerScore === 3) return "computer"
}

/*
Display winner
*/
const winnerDiv = document.querySelector("div.winner");

function displayWinner(winnerP) {
  if (winnerP === "player") winnerDiv.textContent = "YOU WON"
  else if (winnerP === "computer") winnerDiv.textContent = "YOU LOST"
}

/*
Add reset button
*/
const resetBtn = document.querySelector(".reset > button");

function addResetBtn() {
  resetBtn.classList.add("visible")
}


/*
Reset
*/
resetBtn.addEventListener("click", reset);

function reset() {
  playerScore = 0;
  playerScoreBoard.textContent = playerScore;
  computerScore = 0;
  computerScoreBoard.textContent = computerScore;
  resultDiv.textContent = "Choose your weapon!";
  winnerDiv.textContent = "";
  resetBtn.classList.remove("visible");
  addListeners();
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
  

