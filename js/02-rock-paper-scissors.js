function getUserChoice() {
    let result = ''

    while (true) {
        result = prompt('Select rock, paper, or scissors: ').toLowerCase()
        if (result == 'rock' || result == 'paper' || result == 'scissors') {
            return result
        } else {
            alert(`${result} is not a valid choice.`)
        }
    }
}

function getComputerChoice() {
    let result
    let choice = Math.floor(Math.random() * 3)

    switch (choice) {
        case 0: 
            return 'rock'
        case 1:
            return 'paper'
        default:
            return 'scissors'
    }
}

// User     | Computer | Result
// rock     | rock     | 2 
// scissors | scissors | 2
// paper    | paper    | 2
// rock     | scissors | 0
// paper    | rock     | 0
// scissors | paper    | 0
// rock     | paper    | 1
// paper    | scissors | 1
// scissors | rock     | 1

function compareChoices(user, computer) {
    if (user == computer) {
        return 2
    } else if ((user == 'rock' && computer == 'scissors') || (user == 'paper' && computer == 'rock') || (user == 'scissors' && computer == 'paper')) {
        return 0
    } else if ((user == 'rock' && computer == 'paper') || (user == 'paper' && computer == 'scissors') || (user == 'scissors' && computer == 'rock')) {
        return 1
    } else {
        return 3
    }
}

function main() {
    let playAgain = 'y'
    let playerChoice, computerChoice
    let gameResult

    do {
        playerChoice = getUserChoice()
        computerChoice = getComputerChoice()
        gameResult = compareChoices(playerChoice, computerChoice)
        switch (gameResult) {
            case 0:
                alert(`You win!!!\nYou selected ${playerChoice} and I picked ${computerChoice}.`)
                break;
            case 1:
                alert(`I win!!!\nYou selected ${playerChoice} and I picked ${computerChoice}.`)
                break;
            case 2:
                alert(`We both selected ${computerChoice}.\nNo one wins.`)
                break;
            default:
                console.log(`Error state reached. ${playerChoice} - ${computerChoice} - ${gameResult}`)
        }
        do {
            playAgain = prompt('Do you want to play again? (y/n) ').toLocaleLowerCase()
        } while (playAgain != 'y' && playAgain != 'n')
    } while (playAgain == 'y')
}

main()