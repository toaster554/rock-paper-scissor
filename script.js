function computerPlay() {
    let choices = ["rock", "paper", "scissor"];

    let randomInt = Math.floor(Math.random() * 3);

    return choices[randomInt];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Tie!";
    }

    if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "scissor" ||
        playerSelection === "scissor" && computerSelection === "sock") {
            return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

    return `You Win! ${playerSelection} beats ${computerSelection}`;
}

function game() {
    while (true) {
        let playerSelection = prompt("Enter your choice (type \"stop\" to end the game):");

        if (playerSelection.toLowerCase() === "stop") {
            return;
        }

        alert(playRound(playerSelection, computerPlay()));
    }
}

game();