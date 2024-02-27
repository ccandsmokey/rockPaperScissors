function getComputerChoice () {
    const choiceArray = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomIndex]
    return computerChoice
}

function playRound(playerSelection, computerSelection) {
    playerSelection.toLowerCase();
    if (computerSelection === "rock")  {
        return "tie";
    } else if (computerSelection === "paper") {
        computerScore++;
        return "player loose";
    } else; {
        playerScore++;
        return "player win"
    }
} 

const playerSelection = "rock";

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