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

function playRound(playerSelection, computerSelection) {
    let fullplayer = playerSelection[0].toUpperCase() + playerSelection.substring(1);
    let fullcomputer = computerSelection[0].toUpperCase() + computerSelection.substring(1);
    if (playerSelection == computerSelection) {
        return ("It is a tie!")
    } else if ((playerSelection == "rock" && computerSelection == "scissors")
            || (playerSelection == "paper" && computerSelection == "rock")
            || (playerSelection == "scissors" && computerSelection == "paper")) {
        return ("You win! " + fullplayer + " beats " + fullcomputer)
    } else {
        return ("You lose! " + fullplayer + " loses to " + fullcomputer)
    }
}

function game() {
    const playerSelection = prompt("Select Rock, Paper or Scissors").toLowerCase();
    let round;
    let yourScore = 0;
    let compScore = 0;
    for (let i = 0; i < 5; i++) {
        let computerSelection = computerPlay();
        round = playRound(playerSelection, computerSelection);
        console.log(round);
        if (round[4] == 'w') {
            yourScore++;
        } else if (round[4] == 'l') {
            compScore++;
        }
        console.log("Your score is " + yourScore + ". Computer's score is " + compScore + ".");
    }

    if (yourScore > compScore) {
        console.log("You played 5 games. You won!!!")
    } else if (compScore > yourScore) {
        console.log("You played 5 games. You lost!!!")
    } else {
        console.log("You played 5 games. It is a tie!!!")
    }
}
game();