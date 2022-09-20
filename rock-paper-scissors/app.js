
//Caching the DOM.. Storing something for future use.. 
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");         //DOM Variables
const computerScore_span = document.getElementById("computer-score"); //DOM Variables
const scoreboard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById ("r")
const paper_div = document.getElementById ("p")
const scissor_div = document.getElementById ("s")

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(usersChoice, computerChoice) {
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = `${convertToWord(usersChoice)} beats ${convertToWord(computerChoice)} You Win!`
    document.getElementById(usersChoice).classList.add('green-glow');
}

function lose(usersChoice, computerChoice) {
    computerScore ++;
    computerScore_span.innerHTML = computerScore
    userScore_span.innerHTML = userScore
    result_p.innerHTML = `${convertToWord(computerChoice)} beats ${convertToWord(usersChoice)} You Lose!`
    document.getElementById(usersChoice).classList.add('red-glow');
}

function draw(usersChoice, computerChoice) {
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convertToWord(computerChoice)} Matches ${convertToWord(usersChoice)} It's A Draw!`
    document.getElementById(usersChoice).classList.add('grey-glow');
}

function game(userChoice){
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice)
            break;
        case "rp":
        case "ps": 
        case "sr":
            lose(userChoice, computerChoice)
            break;
        case "rr":
        case "pp": 
        case "ss":
            draw(userChoice, computerChoice)
            break;
    }

}

function main () {
    rock_div.addEventListener('click',function() {
        game("r");
    })
    paper_div.addEventListener('click',function() {
        game("p");
    })
    scissor_div.addEventListener('click',function() {
        game("s");
    })
}

main();