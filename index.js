const possiblePlays = ["Rock", "Paper", "Scissors"];

var playerScore = 0;
var computerScore = 0;

// first level is user choice
// second level is cpu choice
const outcomes = {

    "Rock": {
        "Rock": () => {
            console.log("Tied!")
        },
        "Paper": () => {
            computerScore++;
            console.log("You lose. Rock loses to paper.");
        },
        "Scissors": () => {
            playerScore++;
            console.log("You win! Rock beats Scissors!");
        },
    },

    "Paper": {
        "Rock": () => {
            playerScore++;
            console.log("You win! Paper beats Rock!");
        },
        "Paper": () => {
            console.log("Tied!")
        },
        "Scissors": () => {
            computerScore++;
            console.log("You lose. Paper loses to Scissors.");
        },
    },
    
    "Scissors": {
        "Rock": () => {
            computerScore++;
            console.log("You lose. Scissors loses to Rock.");
        },
        "Paper": () => {
            playerScore++;
            console.log("You win! Scissors beats Paper!");
        },
        "Scissors": () => {
            console.log("Tied!")
        },
    }
}

function playerPlay() {
    let playerChoice = "";
    do {
        playerChoice = formatInput(prompt("Choose your move: (Rock, Paper, Scissors)"));
    } while (!possiblePlays.includes(playerChoice));

    console.log("\nYou chose: " + playerChoice);
    return playerChoice;
}

function computerPlay() {
    const computerChoice = possiblePlays[Math.floor(Math.random() * possiblePlays.length)];
    console.log("CPU chose: " + computerChoice)
    return computerChoice;
}

function formatInput(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    return outcomes[playerSelection][computerSelection]();
}

function showResult() {
    console.log
    (`
    Final score:
    You: ${playerScore}
    CPU: ${computerScore}
    `)

    let result = playerScore > computerScore ? "You won!" 
                : playerScore === computerScore ? "You and the machine are equals."
                : "You lost. Better luck next time!";

    console.log(result);
}

function game() {

    for (let i = 0; i < 5; i++) {
        playRound(playerPlay(), computerPlay());
    }
}

game();
showResult();