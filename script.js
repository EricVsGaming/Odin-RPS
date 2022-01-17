function computerPlay() {
    let randomNum = Math.floor(Math.random() * 3);
    switch(randomNum) {
        case 0:
            console.log("Computer picked rock!");
            return "rock";

        case 1:
            console.log("computer picked paper!");
            return "paper";

        case 2:
            console.log("computer picked scissors!");
            return "scissors";

        default:
            console.log("An error occurred while determining the computer's selection. Trying again...");
            computerPlay();
    }
}

function playerPlay() {
    let playerSelection = window.prompt("Please enter rock, paper, or scissors.", "Rock").toLowerCase();
    console.log("Player picked " + playerSelection + "!");
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if(computerSelection == "scissors") {
                console.log("Rock beats scissors! You win!");
            } else if (computerSelection == "paper") {
                console.log("Paper beats rock! You lose! Better luck next time.");
            } else {
                console.log("Its a draw!");
            }
            break;
        
        case "paper":
            if(computerSelection == "rock") {
                console.log("Paper beats rock! You win!");
            } else if (computerSelection = "scissors") {
                console.log("Scissors beats paper! You lose! Better luck next time.");
            } else {
                console.log("Its a draw!");
            }
            break;
        
        case "scissors":
            if(computerSelection == "paper") {
                console.log("Scissors beats paper! You win!");
            } else if (computerSelection = "rock") {
                console.log("Rock beats scissors! You lose! Better luck next time.");
            } else {
                console.log("Its a draw!");
            }
            break;
    }
}

function playGame(roundCount) {
    for (let i = 1; i <= roundCount; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        playRound(playerSelection, computerSelection);
        console.log(`Game ${i}/${roundCount} is now finished. Beginning round #${i + 1}.`);
    }
    console.log("Game over. Run playGame(number of rounds desired) to play again!");
}

playGame(10);