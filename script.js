function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "rock";
    } else if (choice === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function match(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Won! Rock beats Scissors";
        } else {
            return "Draw! Rock draws with Rock";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You Won! Paper beats Rock";
        } else if (computerSelection === "scissors") {
            return "You Lose! Scissors beat Paper";
        } else {
            return "Draw! Paper draws with Paper";
        }
    } else {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else if (computerSelection === "paper") {
            return "You Won! Scissors beat Paper";
        } else {
            return "Draw! Scissors draw with Scissors";
        }
    }
}

let computerSelection = getComputerChoice();
let playerSelection = prompt("Do you want to play Rock, Paper or Scissors? ").toLowerCase();

console.log(match(playerSelection, computerSelection));