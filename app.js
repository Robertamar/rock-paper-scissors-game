let images=document.querySelectorAll(".choice");
let humanScore=0;
let gameScore=0;

let message=document.querySelector(".message");
let compScored=document.querySelector(".compScore");
let userScored=document.querySelector(".humanScore");
let reset=document.querySelector(".reset");


const resetGame = ()=>{
    humanScore=0;
    gameScore=0
    userScored.innerText=humanScore;
    compScored.innerText=gameScore;
    message.innerText="Play your move";
    message.style.backgroundColor="#081b31";
}


reset.addEventListener("click",resetGame);



const gameChoosed = ()=>{
    let choices = ["rock","paper","scissors"];
    let index = Math.floor(Math.random()*3);
    return choices[index];
}

const updateScore = (userWin,userChoice,gameChoice)=>{
    if(userWin){
        // console.log("you win");
        message.innerText= `You Win, Your ${userChoice} beats ${gameChoice}!`;
        message.style.backgroundColor="green";
        // humanScore++;
        userScored.innerText=++humanScore;
    }
    else {
        // console.log("you lose");
        message.innerText=`Computer Win, ${gameChoice} beats your ${userChoice}!`;
        message.style.backgroundColor="red";
        compScored.innerText=++gameScore;
    }
}

const draw = ()=>{
    // console.log("Game is Draw");
    message.innerText="Game is Draw, Play Again!"
    message.style.backgroundColor="#081b31"
}
const playGame = (userChoice)=>{
    // console.log("user choosed : ",userChoice);
    let gameChoice = gameChoosed();
    // console.log("game choosed : ",gameChoice);
    if(userChoice === gameChoice){
        draw();
    }
    else{
        let userWin=true;
        if(gameChoice==="rock"){
            userWin = userChoice==="paper" ? true : false;
        }
        else if(gameChoice==="paper"){
            userWin = userChoice==="scissors" ? true : false;
        }
        else{
            userWin = userChoice=== "rock" ? true : false;
        }

        updateScore(userWin,userChoice,gameChoice);
    }
}

for(let image of images){
    image.addEventListener("click",()=>{
        let userChoice=image.getAttribute("id");
        // console.log("image was clicked is: ",userChoice);
        playGame(userChoice);
    })
}