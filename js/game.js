function chooseAnswer(promptMessage, rightAnswer, rightLink, wrongAnswer, wrongLink){
    let moment = 0;
    while ( moment == 0){
        let playerChoice = prompt(promptMessage)
        if(playerChoice == rightAnswer){
            location.href = (rightLink)
            moment = 1
        } else if(playerChoice == wrongAnswer){
            location.href = (wrongLink)
            moment = 1
        } else {
            alert('Você só pode escolher 1 ou 2!')
            moment = 0
        }
    }
}