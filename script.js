let playerScore = 0;
let computerScore = 0;
let roundCount = 0
let playerSelection = '';
let buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {    // Adds click event listener to each button
    btn.addEventListener('click', event => {
        playGame(event.target.innerText);
    });
});

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
    let playerSelection = '';
    let buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {    // Adds click event listener to each button
        btn.addEventListener('click', event => {
            playerselection = event.target.innerText;
        });
    });
    
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    let roundResult = document.querySelector('#result');
    let gameResult = document.querySelector('#winner'); // To fix current issue of text being overwritten, try making a new element for game winner message
    if((playerScore + computerScore) >= 10) {
        console.log(playerScore + computerScore);
        console.log(typeof (playerScore + computerScore));
        // if(playerScore > computerScore) {
        //     gameResult.textContent = 'Game over - Player wins!';

        // } else if (playerScore < computerScore) {
        //     gameResult.textContent = 'Game over - Computer wins! :[';

        // } else {
        //     gameResult.textContent = 'Game over - It\'s a draw! :['
            
        // }
        return;
    }

    switch(playerSelection) {
        case "rock":
            if(computerSelection == "scissors") {
                roundResult.innerHTML = "Rock beats scissors - You win!";
                return true;
            } else if (computerSelection == "paper") {
                roundResult.innerHTML = "Paper beats rock - You lose!";
                return false;
            } else {
                roundResult.innerHTML = "Its a draw!";
            }
            break;
        
        case "paper":
            if(computerSelection == "rock") {
                roundResult.textContent = "Paper beats rock - You win!";
                return true;
            } else if (computerSelection == "scissors") {
                roundResult.textContent = "Scissors beats paper - You lose!";
                return false;
            } else {
                roundResult.textContent = "Its a draw!";
            }
            break;
        
        case "scissors":
            if(computerSelection == "paper") {
                roundResult.textContent = "Scissors beats paper - You win!";
                return true;
            } else if (computerSelection == "rock") {
                roundResult.textContent = "Rock beats scissors - You lose!";
                return false;
            } else {
                gameResult.textContent = "Its a draw!";
            }
            break;
    }
}

function playGame(playerSelection) {
    let computerSelection = computerPlay();
    let score = document.querySelector('.game-output > :first-child');
    let gameResult = document.querySelector('#winner');
    
    switch(playRound(playerSelection, computerSelection)) {
        case true:
        playerScore++;
        break;

        case false:
        computerScore++;
        break;
        
    }

    score.textContent = `Score: ${playerScore} | ${computerScore}`
    if(playerScore + computerScore >= 10) {
        if(playerScore > computerScore) {
            gameResult.textContent = 'Game over - Player wins!';

        } else if (playerScore < computerScore) {
            gameResult.textContent = 'Game over - Computer wins! :[';

        } else {
            gameResult.textContent = 'Game over - It\'s a draw! :['
            
        }
        playerScore = 0;
        computerScore = 0;
    }
}

    
    // console.log(`Game over. Run playGame(number of rounds desired) to play again!`); // This too
    // if(playerScore > computerScore) { // And all of this
    //     console.log(`Player wins with a score of ${playerScore}!`);
    // } else if (computerScore > playerScore) {
    //     console.log(`Computer wins with a score of ${computerScore}`);
    // } else {
    //     console.log(`It's a tie with a score of ${playerScore}/${computerScore}`);
    // }



