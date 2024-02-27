function getComputerChoice () {
    const choiceArray = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomIndex]
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (computerSelection === playerSelection)  {
        return "tie";
    } else if (computerSelection === "paper" && playerSelection == "rock") {
        computerScore++;
        return "player loose";
    } else if (computerSelection === "paper" && playerSelection == "scissors") {
        playerScore++;
        return "player win"
    } else if (computerSelection === "rock" && playerSelection == "paper") {
        computerScore++;
        return "player loose";
    } else if (computerSelection === "rock" && playerSelection == "scissors") {
        playerScore++;
        return "player win"
    } else if (computerSelection === "scissors" && playerSelection == "paper") {
        computerScore++;
        return "player loose";
    } else if (computerSelection === "scissors" && playerSelection == "rock") {
        playerScore++;
        return "player win";
    }
}

const playerSelection = prompt();

let playerScore = 0
let computerScore = 0

function playGame() {
    for (let step = 0; step < 5; step++)
        playRound(playerSelection, getComputerChoice())
    if (playerScore > computerScore) {
        return"Player Wins!!";
    } else if (playerScore < computerScore) {
        return "Computer Wins!!";
    } else {
        return "Tie!!";
    }      
}

console.log(playGame())