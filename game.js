function getComputerChoice () {
    const choiceArray = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choiceArray.length);
    const computerChoice = choiceArray[randomIndex]
    return computerChoice
}

function playRound(playerSelection, computerSelection) {

    let pSelection = playerSelection.toLowerCase();
    if (computerSelection === pSelection)  {
        p.textContent = "Tie!";
    } else if (computerSelection === "paper" && pSelection === "rock") {
        computerScore++;
        p.textContent = "Computer chose paper. Point Computer!";
    } else if (computerSelection === "paper" && pSelection === "scissors") {
        playerScore++;
        p.textContent = "Computer chose paper. Point Player!";
    } else if (computerSelection === "rock" && pSelection === "paper") {
        playerScore++;
        p.textContent = "Computer chose rock. Point Player!";
    } else if (computerSelection === "rock" && pSelection === "scissors") {
        computerScore++;
        p.textContent = "Computer chose rock. Point Computer!";
    } else if (computerSelection === "scissors" && pSelection === "paper") {
        computerScore++;
        p.textContent = "Computer chose scissors. Point Computer!";
    } else if (computerSelection === "scissors" && pSelection === "rock") {
        playerScore++;
        p.textContent = "Computer chose scissors. Player!";
    }
    keepScore()
    div.textContent = `Player Score: ${playerScore}:` + ` Computer Score: ${computerScore}`


}

const rockBtn = document.createElement("button");
rockBtn.textContent = ("Rock");
const paperBtn = document.createElement("button");
paperBtn.textContent = ("Paper");
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = ("Scissors");

const div = document.createElement("div");
const p = document.createElement("p");



const body = document.querySelector("body");
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);
body.appendChild(div);
body.appendChild(p);


const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        playRound(e.target.innerText, getComputerChoice())
    });
});

let playerScore = 0
let computerScore = 0

div.textContent = `Player Score: ${playerScore}:` + ` Computer Score: ${computerScore}`

function keepScore() {
    if (playerScore === 5) {
        alert("You Win!");
        location.reload();
    } else if (computerScore === 5) {
        alert("Sorry Computer Wins!");
        location.reload();
    }
}
//     if (playerScore > computerScore) {
//         return"Player Wins!!";
//     } else if (playerScore < computerScore) {
//         return "Computer Wins!!";
//     } else {
//         return "Tie!!";
//     }      
// }

