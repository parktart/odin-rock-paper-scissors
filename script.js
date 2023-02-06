"use strict";

const threeButtons = document.querySelectorAll(".buttons > button");
const arenaDiv = document.querySelector("div.arena");
const resultDiv = document.querySelector("div.result");
const scoreDiv = document.querySelector("div.score");

addRoundListeners();

function addRoundListeners() {
  threeButtons.forEach((button) => {
    button.addEventListener("click", playSingleRound)
  });
}

function removeRoundListeners() {
  threeButtons.forEach((button) => {
    button.removeEventListener("click", playSingleRound);
  });
}

addInitialListeners();

function addInitialListeners() {
  threeButtons.forEach((button) => {
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
  threeButtons.forEach((button) => {
    button.removeEventListener("click", initialSetup);
  });
}

function playSingleRound(e) {
  const playerChoice = e.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  const roundResult = getRoundResult(playerChoice, computerChoice);
  
  resetImg();

  // delay execution of displayImg(playerChoice,computerChoice) by 1 milliseconds
  setTimeout(displayImg, 1, playerChoice, computerChoice);
  // needed for transition from resetImg to be recognized

  // delay execution of makeImgFullWidth(playerChoice,computerChoice) by 50 milliseconds
  setTimeout(makeImgFullWidth, 50, playerChoice, computerChoice);
  // needed for transition from displayImg to be recognized

  resultDiv.textContent = roundResult;
  updateScore(roundResult);
  const winner = checkForWinner();
  if (winner) {
    displayWinner(winner);
    addResetBtn();
    removeRoundListeners();
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
Arena images
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
  } else if (playerChoiceP === "paper") {
    playerPaperImg.classList.add("visible");
  } else if (playerChoiceP === "scissors") {
    playerScissorsImg.classList.add("visible");
  }
  if (computerChoiceP === "rock") {
    computerRockImg.classList.add("visible");
  } else if (computerChoiceP === "paper") {
    computerPaperImg.classList.add("visible");
  } else if (computerChoiceP === "scissors") {
    computerScissorsImg.classList.add("visible");
  }
}

function makeImgFullWidth(playerChoiceP, computerChoiceP) {
  if (playerChoiceP === "rock") {
    playerRockImg.classList.add("full-width");
  } else if (playerChoiceP === "paper") {
    playerPaperImg.classList.add("full-width");
  } else if (playerChoiceP === "scissors") {
    playerScissorsImg.classList.add("full-width");
  }
  if (computerChoiceP === "rock") {
    computerRockImg.classList.add("full-width");
  } else if (computerChoiceP === "paper") {
    computerPaperImg.classList.add("full-width");
  } else if (computerChoiceP === "scissors") {
    computerScissorsImg.classList.add("full-width");
  }
}

function resetImg() {
  playerRockImg.classList.remove("visible", "full-width");
  playerPaperImg.classList.remove("visible", "full-width");
  playerScissorsImg.classList.remove("visible", "full-width");
  computerRockImg.classList.remove("visible", "full-width");
  computerPaperImg.classList.remove("visible", "full-width");
  computerScissorsImg.classList.remove("visible", "full-width");
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
  resultDiv.textContent = "";
  // winnerDiv.textContent = "";
  winnerDiv.classList.remove("visible");
  resetBtn.classList.remove("visible");
  addRoundListeners();
  resetImg();
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
  

