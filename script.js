//js
let boxes=document.querySelectorAll(".box");
let resetButton= document.querySelector("#resetbutton");

let newGameButton= document.querySelector("#newbutton");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
// let bdy=document.querySelector("body");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=()=>{
    turnO= true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("box was clicked");
        if (turnO){
            box.innerText="O";
            turnO= false;
        }else{
            box.innerText="X";
            turnO= true;
        }
        box.disabled= true;

        checkWinner();
    });
});
const disableBoxes=()=>{
    for (let box of boxes){
       box.disabled = true; 
    }
}


const enableBoxes=()=>{
    for (let box of boxes){
       box.disabled = false; 
       box.innerText="";
    }
}


const showWinner=(winner)=>{
    msg.innerText=`CONGRATULATIONS Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner=() =>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner",pos1val);

                showWinner(pos1val);

            }
        }
    }
};

newGameButton.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);