"use strict";

const threeButtons = document.querySelectorAll(".buttons > button");
const arenaDiv = document.querySelector("div.arena");
const buttonsDiv = document.querySelector("div.buttons");
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
  scoreDiv.classList.add("visible");
  removeInitialListeners();
}

function removeInitialListeners() {
  threeButtons.forEach((button) => {
    button.removeEventListener("click", initialSetup);
  });
}

setTimeout(showResultDiv, 1000);
// delay initial message by 1 second
function showResultDiv() {
  resultDiv.classList.add("visible");
}

function hideResultDiv() {
  resultDiv.classList.remove("visible");
}


function playSingleRound(e) {
  const playerChoice = e.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice();
  const roundResult = getRoundResult(playerChoice, computerChoice);
  
  hideResultDiv();
  resultDiv.textContent = roundResult;
  
  resetImg();

  // delay execution of displayImg(playerChoice,computerChoice) by 1 milliseconds
  setTimeout(displayImg, 1, playerChoice, computerChoice);
  // needed for transition from resetImg to be recognized

  // delay execution of makeImgFullWidth(playerChoice,computerChoice) by 50 milliseconds
  setTimeout(makeImgFullWidth, 50, playerChoice, computerChoice);
  // needed for transition from displayImg to be recognized

  setTimeout(showResultDiv, 800);

  updateScore(roundResult);

  const winner = checkForWinner();
  if (winner) {
    removeRoundListeners();
    setTimeout(endGame, 2000, winner); // 2 seconds
  }
}

function endGame(winner) {
  hideResultDiv();
  buttonsDiv.style.marginBottom = "0";
  resultDiv.style.marginBottom = "8px";
  resetImg();
  displayWinner(winner);
  addResetBtn();
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
  if (playerScore === 3) return "player"
  else if (computerScore === 3) return "computer"
}

/*
Display winner
*/
const winnerDiv = document.querySelector("div.winner");

function displayWinner(winnerP) {
  resetWinnerDiv();
  if (winnerP === "player") {
    winnerDiv.textContent = "YOU WON";
    winnerDiv.style.color = "green";
  } else if (winnerP === "computer") {
    winnerDiv.textContent = "YOU LOST"
    winnerDiv.style.color = "red";
  }
  setTimeout(makeWinnerVisible, 1); // 1 millisecond
  setTimeout(makeWinnerBig, 50); // 50 milliseconds
}

function resetWinnerDiv() {
  winnerDiv.classList.remove("visible", "full-font");
}

function makeWinnerVisible() {
  winnerDiv.classList.add("visible");
}

function makeWinnerBig() {
  winnerDiv.classList.add("full-font");
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
  buttonsDiv.style.marginBottom = butDivInitMargBot;
  resultDiv.textContent = resultDivInitTextCont;
  resultDiv.style.marginBottom = resultDivInitMargBot;
  showResultDiv();
  winnerDiv.classList.remove("visible");
  resetBtn.classList.remove("visible");
  addRoundListeners();
}

const butDivInitMargBot = buttonsDiv.style.marginBottom;
const resultDivInitTextCont = resultDiv.textContent;
const resultDivInitMargBot = resultDiv.style.marginBottom;



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
  

