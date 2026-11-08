let user=0;
let comp =0;

let userscore = document.querySelector("#user-score");
let compscore = document.querySelector("#comp-score");

let msg = document.querySelector("#msg");

let choices= document.querySelectorAll(".choice");

const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    let index=Math.floor(Math.random()*3);
    return options[index];
}
const showwinner= (userwin) =>{
    if (userwin === true ) {
        user++;
        msg.innerText = ` YOU WON ! `;
        msg.style.backgroundColor= "green";
    }
    else{
        comp++;
        msg.innerText = " YOU LOSE";
        msg.style.backgroundColor= "red";
        msg.innerText = ` YOU LOSE `;
    }
    userscore.innerText = user;
    compscore.innerText = comp;
}

const draw=() =>{
    msg.style.backgroundColor= "#081b31";
}

const playgame = (userChoice)=>{
    let compchoice= gencompchoice();
    if (userChoice=== compchoice){
        draw();
        msg.innerText = " MATCH DRAW";
    }
    else{
        let userwin=true;
        if (userChoice==="rock"){
            userwin = compchoice=== "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userwin = compchoice === "rock" ? true : false;
        }
        else if (userChoice === "scissors"){
            userwin = compchoice === "rock" ? false : true;
        }
    showwinner(userwin)
}
}

choices.forEach((choice) => {
    choice.addEventListener(("click"), () =>{
        const userChoice = choice.getAttribute("id");

        playgame(userChoice);
    })
    
});
