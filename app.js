let userscore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const GenCompchoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
};

const drawGame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was Draw . Play again";
    msg.style.backgroundColor = "#B3C8CF";
};

const showWinner = (userWin,userChoice,compchoice)  => {
    if(userWin) {
        userscore++;
        userScorePara.innerText = userscore;
        console.log("You are the winner!");
        msg.innerText = `You win! Your ${userChoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You Lost! ${compchoice} beats your choice ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};


const playGame = (userChoice) => {
    console.log("user choice =", userChoice);
    //Generate Computer choice
    const compchoice = GenCompchoice();
    console.log("Computer choice =",compchoice);

    if(userChoice == compchoice) {
        drawGame();
    } else {
        let userWin = true;
        if(userChoice=="rock") {
            //scissors , paper
            userWin = compchoice== "paper"? false : true;
        } else if(userChoice=="paper") {
            //rock , scissors
            userWin = compchoice == "scissors" ? false : true;
        } else{
            //rock,paper
            userWin = compchoice == "rock" ? false : true; 
        }
        showWinner(userWin,userChoice,compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id")
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});