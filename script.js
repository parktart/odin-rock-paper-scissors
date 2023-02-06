"use strict";

const buttons = document.querySelectorAll(".buttons > button");
const arenaDiv = document.querySelector("div.arena");
const resultDiv = document.querySelector("div.result");
const scoreDiv = document.querySelector("div.score");

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

addInitialListeners();

function addInitialListeners() {
  buttons.forEach((button) => {
    button.addEventListener("click", initialSetup)
  });
}

function initialSetup() {
  arenaDiv.classList.add("visible");
  arenaDiv.classList.add("full-height");
  // event listener to wait for transitionend
  // (arena built) before continuing here
  resultDiv.classList.add("visible");
  scoreDiv.classList.add("visible");
  removeInitialListeners();
}

function removeInitialListeners() {
  buttons.forEach((button) => {
    button.removeEventListener("click", initialSetup);
  });
}

function playSingleRound(e) {
  const playerChoice = e.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  const roundResult = getRoundResult(playerChoice, computerChoice);
  
  displayImg(playerChoice, computerChoice);

  // delay execution of makeImgFullWidth(playerChoice,computerChoice) by 0 milliseconds
  setTimeout(makeImgFullWidth, 0, playerChoice, computerChoice);
  // needed for width transition to be recognized

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
function getRoundResult(playerChoiceP, computerChoiceP) {
  return (playerChoiceP === computerChoiceP) ? "It's a tie! Try again"
  : (playerChoiceP === "rock" && computerChoiceP === "scissors") ? "You win! Rock beats Scissors"
  : (playerChoiceP === "paper" && computerChoiceP === "rock") ? "You win! Paper beats Rock"
  : (playerChoiceP === "scissors" && computerChoiceP === "paper") ? "You win! Scissors beats Paper"
  : (computerChoiceP === "rock" && playerChoiceP === "scissors") ? "You lose! Rock beats Scissors"
  : (computerChoiceP === "paper" && playerChoiceP === "rock") ? "You lose! Paper beats Rock"
  : (computerChoiceP === "scissors" && playerChoiceP === "paper") ? "You lose! Scissors beats Paper"
  : console.log("error");
}

/*
Display arena images
*/
const playerRockImg = document.querySelector(".arena > img:nth-child(1)")
const playerPaperImg = document.querySelector(".arena > img:nth-child(2)")
const playerScissorsImg = document.querySelector(".arena > img:nth-child(3)")
const computerRockImg = document.querySelector(".arena > img:nth-child(4)")
const computerPaperImg = document.querySelector(".arena > img:nth-child(5)")
const computerScissorsImg = document.querySelector(".arena > img:nth-child(6)")

function displayImg(playerChoiceP, computerChoiceP) {
  if (playerChoiceP === "rock") {
    playerRockImg.classList.add("visible");
    playerPaperImg.classList.remove("visible");
    playerScissorsImg.classList.remove("visible");
  } else if (playerChoiceP === "paper") {
    playerRockImg.classList.remove("visible");
    playerPaperImg.classList.add("visible");
    playerScissorsImg.classList.remove("visible");
  } else if (playerChoiceP === "scissors") {
    playerRockImg.classList.remove("visible");
    playerPaperImg.classList.remove("visible");
    playerScissorsImg.classList.add("visible");
  }
  if (computerChoiceP === "rock") {
    computerRockImg.classList.add("visible");
    computerPaperImg.classList.remove("visible");
    computerScissorsImg.classList.remove("visible");
  } else if (computerChoiceP === "paper") {
    computerRockImg.classList.remove("visible");
    computerPaperImg.classList.add("visible");
    computerScissorsImg.classList.remove("visible");
  } else if (computerChoiceP === "scissors") {
    computerRockImg.classList.remove("visible");
    computerPaperImg.classList.remove("visible");
    computerScissorsImg.classList.add("visible");
  }
}

function makeImgFullWidth(playerChoiceP, computerChoiceP) {
  if (playerChoiceP === "rock") {
    playerRockImg.classList.add("full-width");
    playerPaperImg.classList.remove("full-width");
    playerScissorsImg.classList.remove("full-width");
  } else if (playerChoiceP === "paper") {
    playerRockImg.classList.remove("full-width");
    playerPaperImg.classList.add("full-width");
    playerScissorsImg.classList.remove("full-width");
  } else if (playerChoiceP === "scissors") {
    playerRockImg.classList.remove("full-width");
    playerPaperImg.classList.remove("full-width");
    playerScissorsImg.classList.add("full-width");
  }
  if (computerChoiceP === "rock") {
    computerRockImg.classList.add("full-width");
    computerPaperImg.classList.remove("full-width");
    computerScissorsImg.classList.remove("full-width");
  } else if (computerChoiceP === "paper") {
    computerRockImg.classList.remove("full-width");
    computerPaperImg.classList.add("full-width");
    computerScissorsImg.classList.remove("full-width");
  } else if (computerChoiceP === "scissors") {
    computerRockImg.classList.remove("full-width");
    computerPaperImg.classList.remove("full-width");
    computerScissorsImg.classList.add("full-width");
  }
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
  if (playerScore === 5) return "player"
  else if (computerScore === 5) return "computer"
}

/*
Display winner
*/
const winnerDiv = document.querySelector("div.winner");

function displayWinner(winnerP) {
  if (winnerP === "player") winnerDiv.textContent = "YOU WON"
  else if (winnerP === "computer") winnerDiv.textContent = "YOU LOST"
  winnerDiv.classList.add("visible");
}

/*
Add reset button
*/
const resetBtn = document.querySelector(".reset > button");

function addResetBtn() {
  // ADD A DELAY HERE using transitionend event listener
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
  // winnerDiv.textContent = "";
  winnerDiv.classList.remove("visible");
  resetBtn.classList.remove("visible");
  addListeners();
  playerRockImg.classList.remove("visible");
  playerPaperImg.classList.remove("visible");
  playerScissorsImg.classList.remove("visible");
  playerRockImg.classList.remove("full-width");
  playerPaperImg.classList.remove("full-width");
  playerScissorsImg.classList.remove("full-width");
  computerRockImg.classList.remove("visible");
  computerPaperImg.classList.remove("visible");
  computerScissorsImg.classList.remove("visible");
  computerRockImg.classList.remove("full-width");
  computerPaperImg.classList.remove("full-width");
  computerScissorsImg.classList.remove("full-width");
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
  

