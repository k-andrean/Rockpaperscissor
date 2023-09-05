let round = 1;
const count = 5;
let computerSelection; 
let playerSelection;
let playerScore = 0;
let computerScore = 0; 
let draw = 0;


// function prompting and returning player choice

function getPlayerChoice(){
    let playerChoice =  prompt("please enter your choice rock, paper or scissor: ").toLowerCase();

    if (playerChoice  == 'rock'){
        return "Rock!";
    }
    else if (playerChoice  == 'scissor'){
        return "Scissor!";
    }
    else if (playerChoice  == 'paper'){
        return "Paper!";
    }
    else {
        return "Please enter appropriate choice";
    }
};


// function returning computer choice based on math random integer value

function getComputerChoice(){
    let computerChoice =  Math.floor((Math.random() * 3) + 1);

    if (computerChoice  == 1){
        return "Rock!";
    }
    else if (computerChoice  == 2){
        return "Scissor!";
    }
    else {
        return "Paper!";
    }
};

// function simulating game round and returning result while incrementing the score

function gameRound(){

    playerSelection = getPlayerChoice();
    computerSelection = getComputerChoice();



    if ((playerSelection == 'Rock!' && computerSelection == 'Rock!')||(playerSelection == 'Paper!' && computerSelection == 'Paper!')||(playerSelection == 'Scissor!' && computerSelection == 'Scissor!')){
        draw++;
        return "it's a draw!";
    }
    else if ((playerSelection == 'Rock!' && computerSelection == 'Scissor!')||(playerSelection == 'Scissor!' && computerSelection == 'Paper!')||(playerSelection == 'Paper!' && computerSelection == 'Rock!')){
        playerScore++;
        return "Player win!";
    }
    else if ((playerSelection == 'Rock!' && computerSelection == 'Paper!')||(playerSelection == 'Scissor!' && computerSelection == 'Rock!')||(playerSelection == 'Paper!' && computerSelection == 'Scissor!')){
        computerScore++;
        return "Computer win!";
    }
    else {
        return "please reenter appropriate choice";
    }
    
};

// function for logging score and determining final winner of the game

function getGameScore(){

    console.log("Player win: ", playerScore);
    console.log("Computer win: ", computerScore);
    console.log("Draw: ", draw);

    if (playerScore > computerScore){
        console.log("Player win paper rock scissor game")
    }
    else if (playerScore < computerScore){
        console.log("Computer win paper rock scissor game")
    }
    else {
        console.log("The game conclusion is draw, nice game!")
    };

    console.log("Game ended!");
};


// main function simulating five rounds of rock paper scissor game

function playRound(){
    for(let i = count; i > 0; i--){
        console.log("Round: " + round);
        console.log(gameRound());
        round++;
    }

    getGameScore();

};



playRound();