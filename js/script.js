



/*
Generate and return a new choice for the computer - rock, paper, or scissors
*/
function getComputerChoice() {
  let randNum = Math.floor(Math.random()*3) + 1; // Random number - either 1 2 or 3
  if (randNum === 1) return "Rock"
  else if (randNum === 2) return "Paper"
  else if (randNum === 3) return "Scissors"
  else return "An error occured"
}





console.log(
  getComputerChoice()
);



