let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO =true; //player X,player O
let count=0; //Draw the game

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [6,7,8],
    
];
const resetGame=()=>{
    turnO =true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
 
 

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if (turnO){  //playerO
            box.innerText="O";
            turnO = false;
        } 
        else{//player X
        box.innerText="X";
        turnO = true;
        }
        // box.disabled=true;
        // checkWinner();]
        box.disabled = true;
        count++;
    
        let isWinner = checkWinner();
    
        if (count === 9 && !isWinner) {
          gameDraw();
        }

  });
 });

 const disableBoxes=()=>{
    for (box of boxes){
        box.disabled=true;
    }
};
const enableBoxes=()=>{
    for (box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
 const showWinner=(winner)=>{
    msg.innerText=`congratulation,winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
 };
   const checkWinner= ()=>{
    for( let pattern of winPatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !="" ){
            if(pos1val === pos2val && pos2val === pos3val){
               
                showWinner(pos1val);
            }

        }
    }
 };
 newGamebtn.addEventListener("click",resetGame);
 resetbtn.addEventListener("click",resetGame);