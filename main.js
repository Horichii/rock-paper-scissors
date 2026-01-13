let humanScore = 0;
let computerScore = 0;

//score messages
const displayResult = document.createElement("div");
const displayScore = document.createElement("p");
const displayRoundMessage = document.createElement("p");
const displayWinner = document.createElement("h3");
displayWinner.id = "displayWinner"

const gameHeader = document.createElement("h2");
gameHeader.classList.add("h2GameHeader")

//buttons
const selection = document.createElement("div");
selection.classList.add("playerChoice");
selection.style.display = "flex";
selection.style.gap = "20px";

const rock = document.createElement("button");
rock.id = "rockBtn";

const paper = document.createElement("button");
paper.id = "paperBtn";

const scissor = document.createElement("button");
scissor.id = "scissorBtn";  


document.body.appendChild(gameHeader);
gameHeader.textContent = "Please choose!";


document.body.appendChild(selection);
selection.appendChild(rock);
selection.appendChild(paper);
selection.appendChild(scissor);
rock.textContent = "Rock";
paper.textContent = "Paper";
scissor.textContent = "Scissor";


document.body.appendChild(displayResult);
displayResult.appendChild(displayRoundMessage);
displayResult.appendChild(displayScore); 
displayResult.appendChild(displayWinner);

playGame();

function playGame() {
    // let choice = prompt("Rock, Paper, or Scissors:", "")
    let choice = "";

    selection.addEventListener("click", (e) => {

        switch(e.target.id) {
            case "rockBtn" :
                choice = "rock"
            break;
            case "paperBtn" :
                choice = "paper";
            break;
            case "scissorBtn" :
                choice = "scissors"
            break;
            default:
                return;
        }
    if (humanScore === 5 || computerScore === 5 ) return;

    const computerChoice = getComputerChoice();
    playRound(choice, computerChoice);
    });
}


function getComputerChoice() {
    let computerChoice = Math.random()

    switch (true){
        case computerChoice < 0.33:
        // console.log("cmp choice is rock");
        return "rock";
        case computerChoice < 0.66:
        // console.log("cmp choice is paper");
        return "paper";
        default:
        // console.log("scissors computer choice");
        return "scissors";
    }
}

function playRound(humanChoice, computerChoice) {

    let roundMessage = "";

    switch (true) {
        case (humanChoice === computerChoice):
        roundMessage = `It's a tie! Both chose ${humanChoice}`;
        break;

        case (humanChoice === 'rock' && computerChoice === 'scissors'):
        case (humanChoice === 'paper' && computerChoice === 'rock'):
        case (humanChoice === 'scissors' && computerChoice === 'paper'):
        humanScore++;
        roundMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        break;
        default:
        computerScore++;
        roundMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
        }

        updateUI(roundMessage);
        
}  

function updateUI(roundMessage) {

    displayRoundMessage.textContent = roundMessage;

    displayScore.textContent = `Score - Player: ${humanScore}, Computer: ${computerScore}`;

    if (humanScore === 5) {
        displayWinner.textContent = "Game Over: Player wins!";
    } else if (computerScore === 5) {
        displayWinner.textContent = "Game Over: Computer wins!";
    }
}

