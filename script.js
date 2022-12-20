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
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return 1;
        } else {
            return 2;
        }
    } else if (playerSelection === "paper") {
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
/*
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Do you choose Rock, Paper or Scissors? ").toLowerCase();
        let computerSelection = getComputerChoice();

        let round = playRound(playerSelection, computerSelection)

        switch (round) {
            case 0:
                console.log("Draw");
                i--;
                break;
            case 1:
                console.log(`You Win! ${playerSelection} beats ${computerSelection}.`);
                playerScore++;
                break;
            case 2:
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
                computerScore++;
                break;
        }
    }
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("CONGRATULATIONS! YOU WON!");
    } else {
        console.log("You Lost!");
    }
}
*/
const computerSelection = getComputerChoice();
const buttons = [...document.getElementsByTagName('button')];
const resultDisplay = document.getElementsByTagName('div')
const para = document.getElementsByTagName('p');

buttons.forEach( button => button.addEventListener('click', () => {
    const playerSelection = button.innerText.toLowerCase();
    let result = playRound(playerSelection, computerSelection);

    para.innerHTML = 'result';
}))
