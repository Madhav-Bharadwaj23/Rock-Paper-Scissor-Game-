let userscore = document.getElementById("user-score");
let compscore = document.getElementById("comp-score");

userscore = 0;
compscore = 0;

let mssg = document.getElementById("mssg");

const choice  = document.querySelectorAll(".choice");

choice.forEach((choice) => {
    const userchoice = choice.getAttribute("id")
        choice.addEventListener('click', ()=> {
            playgame(userchoice);
        });
    });

const showWinner = (userwin,userchoice,compchoice1) => {

        if (userwin=== true){
            mssg.innerText = `You win! ${userchoice} beats ${compchoice1}`;
            mssg.style.color = "white";
            mssg.style.backgroundColor = "green";
            console.log("You win! Computer loses.");
            userscore++;
            document.getElementById("user-score").innerText = userscore;
        }
        else{(userwin === false)
            mssg.innerText = `You lose! ${compchoice1} beats ${userchoice}`;
            mssg.style.color = "white";   
            mssg.style.backgroundColor = "red";
            console.log("You lose! Computer wins.");
            compscore++;
            document.getElementById("comp-score").innerText = compscore;
        }
    }
const drawgame = (userchoice , compchoice1) => {
    if (userchoice === compchoice1){
        mssg.innerText = "It's a draw!";
        mssg.style.color = "white";
        mssg.style.backgroundColor = "gray";
        console.log("It's a draw!");
    }
}


const playgame = (userchoice) => {
    console.log("User choice is:", userchoice);
    // generate computer choice
    let userwin;
    const compchoice1 = computerchoice();
    console.log("Computer choice is:", compchoice1);


    if (userchoice === compchoice1){
        drawgame(userchoice, compchoice1);
        
    } else {
        let userwin = true;
        if(userchoice === "rock"){
           userwin= compchoice1 === "paper"?false: true;
        }else if (userchoice === "paper"){
           userwin= compchoice1 === "scissor"? false: true;
        }else {
           userwin= compchoice1 === "rock"? false: true;
        
        }
        showWinner(userwin,userchoice,compchoice1);
    }
};


const computerchoice = () => {
        const options = ['rock', 'paper', 'scissor'];
        let randomindex =Math.floor(Math.random() * 3);
        return options [randomindex];
    }


    