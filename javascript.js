let userScore = 0;
let computerScore = 0;

const changeUserScore = document.getElementById("idUserScore");
const changeComputerScore = document.getElementById("idComputerScore");
const changeMutableText = document.querySelector(".mutableText > p");
const changeScoreboard = document.querySelector(".Scoreboard");
const changeRock = document.getElementById("idRockImg");
const changePaper = document.getElementById("idPaperImg");
const changeScissor = document.getElementById("idScissorImg");

function getComputerChoice() {
    const choice = ['r', 'p', 's'];
    const number = Math.floor(Math.random() * 3);
    return (choice[number]);
}

function textModifier(value){
    if(value === 'r'){
        return 'Rock';
    }
    else if(value === 'p'){
        return 'Paper';
    }
    else{
        return 'Scissor';
    }
}


function win(userChoice, computerChoice) {
    userScore++;
    changeUserScore.innerHTML = userScore;
    changeMutableText.innerHTML = `${textModifier(userChoice)} Beats ${textModifier(computerChoice)}. You Win!!!. `;
}

function loose(userChoice, computerChoice) {
    computerScore++;
    changeComputerScore.innerHTML = computerScore;
    changeMutableText.innerHTML = `${textModifier(computerChoice)} Beats ${textModifier(userChoice)}. Looser!!!. `;

}

function draw(userChoice, computerChoice) {
    changeMutableText.innerHTML = `${textModifier(userChoice)} draws with ${textModifier(computerChoice)}. Drawwww!!!. `;
}

function game(userChoice) {

    let computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            loose(userChoice, computerChoice);
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    changeRock.addEventListener('click', function () {
        game('r');
    })

    changePaper.addEventListener('click', function () {
        game('p');
    })

    changeScissor.addEventListener('click', function () {
        game('s')
    })
}
main();


