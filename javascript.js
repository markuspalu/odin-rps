// Title Container
const container = document.getElementById('container');
container.setAttribute("style", "display: flex; flex-direction: column; justify-content: center; align-items: center; margin-bottom: 12px");

// Button Container
const buttoncontainer = document.getElementById('buttoncontainer');
buttoncontainer.setAttribute("style", "display: flex; justify-content: center; gap: 12px;");

// Result Container
const resultcontainer = document.getElementById('resultcontainer');
resultcontainer.setAttribute("style", "display: flex; justify-content: center; height: 50px");

// Score Container
const scorecontainer = document.getElementById('scorecontainer');
scorecontainer.setAttribute("style", "display: flex; justify-content: space-between; align-items: center; margin: 0 5in 12px");

// Emoji Container
const emojicontainer = document.getElementById('emojicontainer');
emojicontainer.setAttribute("style", "display: flex; justify-content: space-between; align-items: center; margin: 0 5in 12px");

// FinalResult Container
const fresultcontainer = document.getElementById('fresultcontainer');
fresultcontainer.setAttribute("style", "display: flex; justify-content: center; height: 100px");

// FinalResult
const fresultDiv = document.createElement('div');
fresultDiv.classList.add('fresultDiv');
fresultDiv.setAttribute("style", "font-size: 24px; text-align: center; text-decoration: underline;");
fresultcontainer.appendChild(fresultDiv);

// PlayerScore
const pscoreDiv = document.createElement('div');
pscoreDiv.classList.add('pscoreDiv');
pscoreDiv.setAttribute("style", "font-size: 24px; text-align: center");
pscoreDiv.textContent = "Player: 0";
scorecontainer.appendChild(pscoreDiv);

// PlayerEmoji
const pEmojiDiv = document.createElement('pEmojiDiv');
pEmojiDiv.classList.add('pEmojiDiv');
pEmojiDiv.setAttribute("style", "font-size: 120px; text-align: center");
pEmojiDiv.textContent = "";
emojicontainer.appendChild(pEmojiDiv);

// ComputerEmoji
const cEmojiDiv = document.createElement('cEmojiDiv');
cEmojiDiv.classList.add('pEmojiDiv');
cEmojiDiv.setAttribute("style", "font-size: 120px; text-align: center");
cEmojiDiv.textContent = "";
emojicontainer.appendChild(cEmojiDiv);

// ComputerScore
const cscoreDiv = document.createElement('div');
cscoreDiv.classList.add('cscoreDiv');
cscoreDiv.setAttribute("style", "font-size: 24px; text-align: center");
cscoreDiv.textContent = "Computer: 0";
scorecontainer.appendChild(cscoreDiv);

// Title
const titleDiv = document.createElement('div');
titleDiv.classList.add('titleDiv');
titleDiv.setAttribute("style", "font-size: 64px; text-align: center; padding-bottom: 12px; font-family: 'Supermercado One', cursive;");
titleDiv.textContent = "Rock, Paper, Scissors";
container.appendChild(titleDiv);

// Buttons
const button1 = document.createElement('button');
const button2 = document.createElement('button');
const button3 = document.createElement('button');
button1.classList.add('rock');
button2.classList.add('paper');
button3.classList.add('scissors');
button1.textContent = "Rock";
button2.textContent = "Paper";
button3.textContent = "Scissors";
buttoncontainer.appendChild(button1);
buttoncontainer.appendChild(button2);
buttoncontainer.appendChild(button3);
const buttons = buttoncontainer.querySelectorAll('button');

buttons.forEach(button => 
    button.setAttribute("style", "display: flex; font-size: 24px; background-color: #e6ffff;\
     border-radius: 10px; margin: 8px; font-family: monospace; border-width: 3px; padding: 4px 8px"));

// Result
const resultDiv = document.createElement('div');
resultDiv.classList.add('resultDiv');
resultDiv.setAttribute("style", "font-size: 24px; text-align: center; margin-bottom: 12px");
resultcontainer.appendChild(resultDiv);

let mySelection = "";
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
        mySelection = buttons[i].textContent.toLowerCase();
        let roundResult = (playRound(mySelection, computerPlay()));
        resultDiv.textContent = roundResult;
        
        if (pscoreDiv.textContent.includes("5")) {
            fresultDiv.textContent = "You won!";
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].disabled = true;
            }
        } else if (cscoreDiv.textContent.includes("5")) {
            fresultDiv.textContent = "You lost!";
            for (let j = 0; j < buttons.length; j++) {
                buttons[j].disabled = true;
                }
        }
    })
}  

function computerPlay() {
    let answer = Math.floor(Math.random() * 3) + 1;
    let returnanswer;
    if (answer == 1) {
        returnanswer = "rock";
    } else if (answer == 2) {
        returnanswer = "paper";
    } else {
        returnanswer = "scissors";
    }
    return returnanswer;
}

let emojis = {"Rock":"✊", "Paper":"✋", "Scissors":"✌"}
let playerScore = 0;
let computerScore = 0;
function playRound(playerSelection, computerSelection) {
    let fullplayer = playerSelection[0].toUpperCase() + playerSelection.substring(1);
    let fullcomputer = computerSelection[0].toUpperCase() + computerSelection.substring(1);
    if (playerSelection == computerSelection) {
        pEmojiDiv.textContent = emojis[fullplayer];
        cEmojiDiv.textContent = emojis[fullcomputer];
        return (`It is a tie! ${fullplayer} and ${fullcomputer} results in a tie.`)
    } else if ((playerSelection == "rock" && computerSelection == "scissors")
            || (playerSelection == "paper" && computerSelection == "rock")
            || (playerSelection == "scissors" && computerSelection == "paper")) {
        playerScore++;
        pscoreDiv.textContent = `Player: ${playerScore}`;
        pEmojiDiv.textContent = emojis[fullplayer];
        cEmojiDiv.textContent = emojis[fullcomputer];
        return (`You win! ${fullplayer} beats ${fullcomputer}.`)
    } else {
        computerScore++;
        cscoreDiv.textContent = `Computer: ${computerScore}`;
        pEmojiDiv.textContent = emojis[fullplayer];
        cEmojiDiv.textContent = emojis[fullcomputer];
        return (`You lose! ${fullplayer} loses to ${fullcomputer}.`)
    }
}