let humanScore = 0;
let computerScore = 0;

playGame()

function getComputerChoice() {
    let computerChoice = Math.random()

    switch (true){
        case computerChoice < 0.33:
        return "rock"
        case computerChoice < 0.66:
        return "paper"
        default:
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper, or Scissors:", "")

    if (choice === null) return null;

        return choice.toLowerCase()
}

function playRound(humanChoice, computerChoice) {

    switch (true) {
        case (humanChoice === computerChoice):
        console.log(`It's a tie! Both chose ${humanChoice}`)
        break;

        case (humanChoice === 'rock' && computerChoice === 'scissors'):
        case (humanChoice === 'paper' && computerChoice === 'rock'):
        case (humanChoice === 'scissors' && computerChoice === 'paper'):
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        break;

        default:
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {

    for (let i=0; i < 5; i++) { //change to while loop to make it a first to 5 wins mode
        
        const humanSelection = getHumanChoice();

        if (humanSelection === null) {
            console.log("Game canceled by user.");
            return;
        }

        const computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
        
        console.log(`Score Tally - Player: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("Game Over: Player wins!");
    } else if (computerScore > humanScore){
        console.log("Game Over: Computer wins!");
    } else {
        console.log("Game Over: It's a draw!")
    }
}
