alert(
  "This is a rock, paper, scissors console game. Please follow the prompts to play.",
);

// Saving game-state data:
let computerChoice = "";
let userChoice = "";
let roundCounter = 0;
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getUserChoice() {
  userChoice = prompt("Enter your choice: rock / paper / scissors");
  if (userChoice !== null) {
    userChoice = userChoice.toLowerCase();
  }
  return userChoice;
}

function evaluateGame() {
  computerChoice = getComputerChoice();
  if (userChoice === computerChoice) {
    alert("DRAW!");
  } else if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "rock")
  ) {
    alert("Computer won this round!");
    computerWins++;
  } else {
    alert("You won this round!");
    playerWins++;
  }
  roundCounter++;
}

function displayStats() {
  alert(`This is round ${roundCounter}\n
          You won ${playerWins} times\n
          Computer won ${computerWins} times     
    `);
  if (roundCounter === 5) {
    if (playerWins > computerWins) {
      alert("Congrats. You won the game!");
    } else if (playerWins < computerWins) {
      alert("You lost the game!");
    } else {
      alert("It ended in a draw");
    }
  }
}

function endProgram() {
  alert("Thanks for playing");
}

function startProgram() {
  while (roundCounter < 5) {
    getUserChoice();
    if (userChoice === null) {
      if (confirm("Do you want to cancel?")) break;
      continue;
    }
    if (
      userChoice !== "rock" &&
      userChoice !== "paper" &&
      userChoice !== "scissors"
    ) {
      alert("Invalid input. Please type either rock, paper or scissors");
      continue;
    }

    evaluateGame();
    displayStats();
  }
  endProgram();
}

startProgram();
