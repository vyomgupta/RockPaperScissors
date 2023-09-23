
const getComputerChoice = () =>{
    
    const choices = ["rock","paper","scissor"];

    const randomIdx = Math.floor(Math.random() * choices.length);

    const randomChoice = choices[randomIdx];

    return randomChoice;
};


function playRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();

    let result = false;

    if(playerSelection === 'rock'&& computerSelection === 'scissor' ){
        result = true;
    }

    else if(playerSelection === 'paper' && computerSelection == 'rock'){
        result = true;
    }
    else if(playerSelection === 'scissor' && computerSelection == 'paper'){
        result = true;
    }
    else if(playerSelection === computerSelection){
        return "DRAW";
    }


    return  result === true ? `player won ${playerSelection} beats ${computerSelection}` : `Computer won ${computerSelection} beats ${playerSelection}`;
}

const game = () =>{
    
    for(let i = 0 ; i < 5 ; i ++){
        console.log(playRound('rock', getComputerChoice()));
    }

};






game();
// getComputerChoice();

// console.log(play('rock', getComputerChoice()));













