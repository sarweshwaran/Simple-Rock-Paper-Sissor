function play(playerMove){

    let opponentMoveEmelent = document.getElementById("opponentMove");
    let playerMoveElement = document.getElementById("playerMove");
    

    //generating opponent move randomly
    //generating a number in range 1 - 3 (where 1->rock, 2->paper, 3->sissor)
    let rnd = Math.floor(Math.random() * 3 + 1);
    let opponentMove = "rock";
    if(rnd == 1){
        opponentMove = "Rock";
    }else if(rnd == 2){
        opponentMove = "Paper";
    }else{
        opponentMove = "Sissor";
    }

    //Displaying changes
    opponentMoveEmelent.innerText = opponentMove;
    playerMoveElement.innerText = playerMove;

    if(playerMove == "Paper"){
        if(opponentMove == "Rock"){
            playerWon();
            
        }else if(opponentMove == "Sissor"){
            opponentWon();
            
        }else{
            tie();
            
        }
    }else if(playerMove == "Rock"){
        if(opponentMove == "Rock"){
            tie();
            
        }else if(opponentMove == "Sissor"){
            playerWon();
            
        }else{
            opponentWon();
        }
    }else{
        if(opponentMove == "Rock"){
            opponentWon();
            
        }else if(opponentMove == "Sissor"){
            tie();
            
        }else{
            playerWon();
            
        }
    }
}

function playerWon(){
    let title = document.getElementById("topCard");
    let scorecard = document.getElementById("playerScore");

    //changing flashCard
    title.innerText = "You Won!!";
    title.style.color = "green";

    //changing Score
    scorecard.innerText = parseInt(scorecard.innerText) + 1;
}

function opponentWon(){
    let title = document.getElementById("topCard");
    let scorecard = document.getElementById("opponentScore");

    title.innerText = "Opponent Won!";
    title.style.color = "red";

    scorecard.innerText = parseInt(scorecard.innerText) + 1;
}

function tie(){
    let title = document.getElementById("topCard");
    title.innerText = "Tie";
    title.style.color = "black";
}