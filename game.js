const arrOptions = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const score = document.querySelector(".score");
const message = document.querySelector(".message");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let result = playRound(button.title, getComputerChoice(arrOptions));
    result.indexOf("WIN") !== -1
      ? writeScore("player")
      : result.indexOf("Lose") !== -1
      ? writeScore("computer")
      : null;
    message.textContent = isWiner() || result;
    if(isWiner())blockButton()
  });
});
function getComputerChoice(options) {
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();

  if (playerSelection === computerSelection) return "Equal";

  let answer = `You Lose! ${computerSelection} beats ${playerSelection}`;

  return playerSelection === "rock" && computerSelection === "paper"
    ? answer
    : playerSelection === "paper" && computerSelection === "scissors"
    ? answer
    : playerSelection === "scissors" && computerSelection === "rock"
    ? answer
    : `You WIN! ${playerSelection} beats ${computerSelection}`;
}
function writeScore(winer) {
    let [computerScore, playerScore] = score.textContent.match(/\d/g);
    if(winer === "computer") computerScore++
    if(winer === "player") playerScore++
    score.textContent = computerScore+" : "+playerScore;
}
function isWiner() {
  const [computerScore, playerScore] = score.textContent.match(/\d/g);
  return computerScore == 5
    ? "Game over! Computer win!"
    : playerScore == 5
    ? "Game over! You win!"
    : false;
}
function blockButton(){
    buttons.forEach(button=>button.disabled=true)
}