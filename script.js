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
// return 0 for draw, 1 for loss, 2 for win
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (playerSeleciton === "rock") {
        if (computerSelection === "paper") {
            return 1;
        } else {
            return 2;
        }
    } else if (playerSelecction === "paper") {
        if (computerSelection === "scissors") {
            return 1;
        } else {
            return 2;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return 1;
        } else {
            return 2;
        }
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you choose Rock, Paper or Scissors? ").toLowerCase();
        let computerSelection = getComputerChoice();

        console.log(playRound(playerSelection, computerSelection))
    }
}