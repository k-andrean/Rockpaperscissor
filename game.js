const rockSelect = 'Rock!';
const paperSelect = 'Paper!';
const scissorSelect = 'Scissor!';
const zeroValue = 0;
const emptyString = '';


let playerScore = zeroValue;
let computerScore = zeroValue; 
let draw = zeroValue;


let playerSelection;
let computerSelection;



function getPlayerChoice(clickedButton){
    const value = clickedButton.value;

    if (value == 'rock') return rockSelect;
    else if (value == 'scissor') return scissorSelect;
    return paperSelect;

};

function getComputerChoice(){
    let computerChoice =  Math.floor((Math.random() * 3) + 1);

    if (computerChoice  == 1) return rockSelect;
    else if (computerChoice  == 2) return scissorSelect;
    return paperSelect;

};

// update game score and display in html
function updateGameScore(playerSelection, computerSelection){


    roundSelection.textContent = `Player choose: ${playerSelection}, Computer choose: ${computerSelection}`;


    if (playerSelection == computerSelection){
        draw++;
        roundWinner.textContent = "it's a draw!";

    }
    else if ((playerSelection == 'Rock!' && computerSelection == 'Scissor!')||(playerSelection == 'Scissor!' && computerSelection == 'Paper!')||(playerSelection == 'Paper!' && computerSelection == 'Rock!')){
        playerScore++;
        roundWinner.textContent = "Player win!";
    }
    else { 
        computerScore++;
        roundWinner.textContent = "Computer win!";
    }

    total.textContent = `Player win: ${playerScore}, Computer win: ${computerScore}, Draw: ${draw}`;

};


function gameRound(clickedButton){

    playerSelection = getPlayerChoice(clickedButton);
    computerSelection = getComputerChoice();
    
    updateGameScore(playerSelection, computerSelection);

};



function playRound(clickedButton){

    gameRound(clickedButton);

    if (playerScore >= 5 || computerScore >= 5){

        const result =
        (playerScore > computerScore) ? 
        'Player is the winner'
        : (computerScore > playerScore) ? 
        'Computer is the winner'
        : 'The game is Draw';

        gameWinner.textContent = result;

        gameWinner.classList.remove('hidden');
        play.classList.remove('hidden');
    }
    
            
};    


// reset game score to beginning
function resetGame(){

    total.textContent = emptyString;
    roundWinner.textContent = emptyString;
    gameWinner.textContent = emptyString;
    roundSelection.textContent = emptyString;

    playerScore = zeroValue;
    computerScore = zeroValue;
    draw = zeroValue;
    console.log(playerScore);

    gameWinner.classList.add('hidden');
    play.classList.add('hidden');
}



// commonly used variable across game function
const playerChoice = document.querySelectorAll('.player-choice');
const play = document.getElementById('play');
const total = document.querySelector('.total');
const roundWinner = document.querySelector('.round-winner');
const gameWinner = document.getElementById('game-winner');
const roundSelection = document.querySelector('.round-selection');




playerChoice.forEach((choice) => choice.addEventListener('click', (e) => playRound(e.target)));

play.addEventListener('click', () =>{
    resetGame()
});










