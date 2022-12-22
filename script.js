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

const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const para = document.createElement('p');
const score = document.createElement('p');
const result = document.createElement('p');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => button.addEventListener('click', () => {
    const playerSelection = button.innerText.toLowerCase();
    const computerSelection = getComputerChoice();
    const round = playRound(playerSelection, computerSelection)
    getResult(playerSelection, computerSelection, round);
}))

function getResult(playerSelection, computerSelection, round) {
    result.innerText = '';
    switch (round) {
        case 0:
            para.innerText = 'Draw';
            break;
        case 1:
            para.innerText = `You Win! ${playerSelection} beats ${computerSelection}`;
            playerScore++;
            break;
        case 2:
            para.innerText = `You Lose! ${computerSelection} beats ${playerSelection}`;
            computerScore++;
    }
    score.innerText = `Player: ${playerScore}     Computer: ${computerScore}`;
    div.appendChild(para);
    div.appendChild(score);


    if (playerScore == 5) {
        result.innerText = 'Congratulations!!! You won the game!';
        div.appendChild(result);
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        result.innerText = 'Oh No! You Lost the game';
        div.appendChild(result);
        playerScore = 0;
        computerScore = 0;
    }
}
