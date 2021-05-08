function computerPlay() {
    let choices = ["rock", "paper", "scissor"];

    let randomInt = Math.floor(Math.random() * 3);

    return choices[randomInt];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let result = document.querySelector("#result");

    if (playerSelection === computerSelection) {
        result.textContent = "Tie!";
    } else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissor" ||
        playerSelection === "scissor" && computerSelection === "sock") {
            result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
            addPoint("Computer");
    } else {
        result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
        addPoint("Player");
    }
}

function announceWinner(winner) {
    alert(`${winner} is the winner!`);
}

function resetGame() {
    document.querySelector("#player-score").textContent = "0";
    document.querySelector("#computer-score").textContent = "0";
    document.querySelector("#result").textContent = "";
}

function addPoint(winner) {
    let scoreElement = document.querySelector(`#${winner.toLowerCase()}-score`);
    let score = parseInt(scoreElement.textContent);
    scoreElement.textContent = (++score).toString();

    if (score === 5) {
        announceWinner(winner);
        resetGame();
    }
}

function game() {
    let choices = document.querySelectorAll(".choice");
    choices.forEach(choice => {
        choice.addEventListener("click", () => {
            playRound(choice.id, computerPlay());
        });
    });
}

game();