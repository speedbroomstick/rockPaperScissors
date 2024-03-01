const arrOptions = ['rock', 'paper', 'scissors']

function getComputerChoice(options) {
    return options[Math.floor(Math.random() * options.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()

    if (playerSelection === computerSelection) return "Equal"

    let answer = `You Lose! ${computerSelection} beats ${playerSelection}`

    return playerSelection === "rock" && computerSelection === "paper" ? answer : playerSelection === "paper" && computerSelection === "scissors" ? answer :
            playerSelection === "scissors" && computerSelection === "rock" ? answer : `You WIN! ${playerSelection} beats ${computerSelection}`
}
function playGame(playRound,countRounds, getComputerChoice){
    let scores = {
        computer:0,
        player:0
    }
    for(let i=0;i<countRounds;i++){
        let result = playRound(prompt("Write rock or paper or scissors"),getComputerChoice(arrOptions));
        result.indexOf("You WIN!") != -1? scores.player++: result.indexOf("You Lose!") != -1? scores.computer++: null;
        console.log(result)
    }
    let textScore = `${scores.player}:${scores.computer}`
    console.log(scores.player >scores.computer?'You win this Game scores:'+textScore: scores.player<scores.computer?'You loose this Game scores:'+textScore :'Equal');
}

playGame(playRound,5,getComputerChoice)
