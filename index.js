function chooseRandomFromArray(arr) {
    const choice = arr[Math.floor(Math.random() * arr.length)];
    return choice;
}

const choices = document.querySelectorAll(".choice-box");

choices.forEach( box => {
    box.addEventListener('click', e => {
        console.log(e.target.innerText);
    })

    box.addEventListener('click', e => {
        let cpuPlay = chooseRandomFromArray(["Rock", "Paper", "Scissors"]);
        const computerChoice = document.querySelector('#computer-choice');
        computerChoice.innerText = `Computer chooses: ${cpuPlay}`;
    })
})






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
