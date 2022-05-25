var playerScore = 0;
var cpuScore = 0;
var round = 0;

function chooseForCpu() {
    return ["Rock", "Paper", "Scissors"][Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, cpuChoice) {
    const playerScoreOutput = document.querySelector('#player-score');
    const cpuScoreOutput = document.querySelector('#cpu-score');

    const roundOutcome = document.querySelector('#round-outcome');
    roundOutcome.innerText = "";

    if (playerChoice === cpuChoice) {
        roundOutcome.innerText = "Tied!";
    } else if (playerChoice === "Rock" && cpuChoice === "Scissors"
            || playerChoice === "Scissors" && cpuChoice === "Paper"
            || playerChoice === "Paper" && cpuChoice === "Rock") {
        roundOutcome.innerText = "You won!";
        playerScore++;
        playerScoreOutput.innerText = `Player score: ${playerScore}`;
    } else { 
        roundOutcome.innerText = "You lose.";
        cpuScore++;
        cpuScoreOutput.innerText = `CPU score: ${cpuScore}`;
    }

    round++;

    if (round === 5) {
        let buttons = document.getElementsByClassName("choice-box");
        for(let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }

        let winOrLoseDisplay = document.querySelector('#win-or-lose-message');

        if (playerScore < cpuScore) {
            winOrLoseDisplay.innerText = "You lost :("
        }

        if (playerScore < cpuScore && playerScore === 0) {
            winOrLoseDisplay.innerText += " Ouch."
        }

        if (playerScore === cpuScore) {
            winOrLoseDisplay.innerText = "Tie game!"
        }

        if (playerScore > cpuScore) {
            winOrLoseDisplay.innerText = "You won!"
        }

        if (playerScore > cpuScore && cpuScore === 0) {
            winOrLoseDisplay.innerText += " They didn't stand a chance."
        }

        if (Math.abs(playerScore - cpuScore) === 1) {
            winOrLoseDisplay.innerText += " Close one!"
        }

        let resultDiv = document.querySelector('#result');
        let playAgainButton = document.createElement('button');
        playAgainButton.id = "play-again-button"
        playAgainButton.innerText = "Play again?";
        resultDiv.appendChild(playAgainButton);
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

document.addEventListener('click', e => {
    if(e.target && e.target.id === 'play-again-button') {
        window.location.reload();
    }
});