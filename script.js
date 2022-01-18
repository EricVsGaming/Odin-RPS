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
    let playerSelection = window.prompt("Please enter rock, paper, or scissors.", "rock").toLowerCase();

    console.log("Player picked " + playerSelection + "!");
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if(computerSelection == "scissors") {
                console.log("Rock beats scissors! You win!");
                return true;
            } else if (computerSelection == "paper") {
                console.log("Paper beats rock! You lose! Better luck next time.");
                return false;
            } else {
                console.log("Its a draw!");
            }
            break;
        
        case "paper":
            if(computerSelection == "rock") {
                console.log("Paper beats rock! You win!");
                return true;
            } else if (computerSelection == "scissors") {
                console.log("Scissors beats paper! You lose! Better luck next time.");
                return false;
            } else {
                console.log("Its a draw!");
            }
            break;
        
        case "scissors":
            if(computerSelection == "paper") {
                console.log("Scissors beats paper! You win!");
                return true;
            } else if (computerSelection == "rock") {
                console.log("Rock beats scissors! You lose! Better luck next time.");
                return false;
            } else {
                console.log("Its a draw!");
            }
            break;
    }
}


function playGame(roundCount) {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= roundCount; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();

        if(playRound(playerSelection, computerSelection) == true) {
            playerScore++;
        } else if(playRound(playerSelection, computerSelection) == false) {
            computerScore++;
        }

        console.log(`Round ${i}/${roundCount} is now finished. Current score is ${playerScore}/${computerScore}.`);
    }

    
    console.log(`Game over. Run playGame(number of rounds desired) to play again!`);
    if(playerScore > computerScore) {
        console.log(`Player wins with a score of ${playerScore}!`);
    } else if (computerScore > playerScore) {
        console.log(`Computer wins with a score of ${computerScore}`);
    } else {
        console.log(`It's a tie with a score of ${playerScore}/${computerScore}`);
    }
}

playGame(10);