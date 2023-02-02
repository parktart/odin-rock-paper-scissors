"use strict";

// const rockBtn = document.querySelector("button.rock");
// const paperBtn = document.querySelector("button.paper");
// const scisBtn = document.querySelector("button.scissors");

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(playSingleRound(e.target.textContent, getComputerChoice()));
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
  : "An error occurred";
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
  : "Please select either rock, paper, or scissors";
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
  

