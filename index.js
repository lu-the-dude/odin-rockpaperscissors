var playerScore = 0;
var cpuScore = 0;

function chooseForCpu() {
    const cpuChoice = ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
    return cpuChoice;
}

function playRound(playerChoice, cpuChoice) {
    const outcome = document.querySelector('#outcome');
    const playerScoreOutput = document.querySelector('#player-score');
    const cpuScoreOutput = document.querySelector('#cpu-score');
    outcome.innerText = "";

    if (playerChoice === cpuChoice) {
        outcome.innerText = "Tied!";
        return;
    }
    
    if (playerChoice === "Rock" && cpuChoice === "Scissors"
     || playerChoice === "Scissors" && cpuChoice === "Paper"
     || playerChoice === "Paper" && cpuChoice === "Rock") {
        outcome.innerText = "You win!";
        playerScore++;
        playerScoreOutput.innerText = `Player score: ${playerScore}`;

    } else { 
        outcome.innerText = "You lost :(";
        cpuScore++;
        cpuScoreOutput.innerText = `CPU score: ${cpuScore}`;

    }
}



const choices = document.querySelectorAll(".choice-box");

choices.forEach( box => {

    box.addEventListener('click', e => {
    const playerChoice = e.target.innerText;
    const playerChoiceOutput = document.querySelector('#player-output');
    playerChoiceOutput.innerText = `You chose: ${playerChoice}`

    const cpuChoice = chooseForCpu();
    const cpuChoiceOutput = document.querySelector('#cpu-output');
    cpuChoiceOutput.innerText = `CPU chose: ${cpuChoice}`;

    playRound(playerChoice, cpuChoice);

    })

});







// const rockBox = document.querySelector('#rock-box')
// rockBox.addEventListener('click', (e) => {
//     console.log(e.target.innerText);
// })


// var playerScore = 0;
// var computerScore = 0;

// // first level is user choice
// // second level is cpu choice
// const outcomes = {

//     "Rock": {
//         "Rock": () => {
//             console.log("Tied!")
//         },
//         "Paper": () => {
//             computerScore++;
//             console.log("You lose. Rock loses to paper.");
//         },
//         "Scissors": () => {
//             playerScore++;
//             console.log("You win! Rock beats Scissors!");
//         },
//     },

//     "Paper": {
//         "Rock": () => {
//             playerScore++;
//             console.log("You win! Paper beats Rock!");
//         },
//         "Paper": () => {
//             console.log("Tied!")
//         },
//         "Scissors": () => {
//             computerScore++;
//             console.log("You lose. Paper loses to Scissors.");
//         },
//     },
    
//     "Scissors": {
//         "Rock": () => {
//             computerScore++;
//             console.log("You lose. Scissors loses to Rock.");
//         },
//         "Paper": () => {
//             playerScore++;
//             console.log("You win! Scissors beats Paper!");
//         },
//         "Scissors": () => {
//             console.log("Tied!")
//         },
//     }
// }

// function playerPlay() {
//     let playerChoice = "";
//     do {
//         playerChoice = formatInput(prompt("Choose your move: (Rock, Paper, Scissors)"));
//     } while (!possiblePlays.includes(playerChoice));

//     console.log("\nYou chose: " + playerChoice);
//     return playerChoice;
// }



// function formatInput(string) {
//     return string[0].toUpperCase() + string.slice(1).toLowerCase();
// }

// function playRound(playerSelection, computerSelection) {
//     return outcomes[playerSelection][computerSelection]();
// }

// function showResult() {
//     console.log
//     (`
//     Final score:
//     You: ${playerScore}
//     CPU: ${computerScore}
//     `)

//     let result = playerScore > computerScore ? "You won!" 
//                 : playerScore === computerScore ? "You and the machine are equals."
//                 : "You lost. Better luck next time!";

//     console.log(result);
// }

// function game() {

//     for (let i = 0; i < 5; i++) {
//         playRound(playerPlay(), computerPlay());
//     }
// }

// window.onload = () => {
//     game();
//     showResult();
// }
