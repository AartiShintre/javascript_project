let box = document.querySelectorAll(".box")
let resetBtn = document.querySelector(".reset")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;//player x, playerO
// enabledBoxes();
let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}

box.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
       if(turnO){
         box.innerText = "O"
         turnO = false;
       }else{
            box.innerText = "X"
            turnO = true;
       }
       box.disabled = true;
       checkWinner();
    })
})

const disabledBoxes = () =>{
    for(let box1 of box){
        box1.disabled = true;
    }
}
const enabledBoxes = () =>{
    for(let box1 of box){
        box1.disabled = false;
         box1.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
    disabledBoxes();

}
const checkWinner = () =>{
    for(pattern of winPattern){
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;

        if(pos1val !="" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val=== pos3val){
                console.log("Winner",pos1val);
                showWinner(pos1val);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);