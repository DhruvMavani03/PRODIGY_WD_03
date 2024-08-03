let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset-btn");
let winner = document.querySelector(".winner");
let start = document.querySelector(".start-btn");
let container=document.querySelector(".container")
let turnO = true;


const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=>{
        if(turnO == true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const checkWinner=()=>{
    for( let pattern of winPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                if(pos1=="O"){
                    winner.innerText="Winner Player 1";
                }
                else{
                    winner.innerText="Winner Player 2";
                };
                disable();
            };
        };
    };
};

const resetgame=()=>{
    turnO=true;
    enable();
    winner.innerText="";
}

const disable=()=>{
    for(let box of boxes){
        box.disabled=true;
}
}

const enable=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};

const startgame =()=>{
    start.classList.add("hide");
    reset.classList.remove("hide");
    container.classList.remove("hide");
    winner.classList.remove("hide");
}

reset.addEventListener("click", resetgame);

start.addEventListener("click", startgame);


