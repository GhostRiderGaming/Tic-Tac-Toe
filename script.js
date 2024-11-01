window.alert("Welcome to Tic Tac Toe");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newGameBtn = document.querySelector(".newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
}

const disableboxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
}
};

const resetGame = () => {
    let turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn0) { //player0
            box.innerText = "0";
            turn0 = false;
        }
        else { //playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
      let pos1Val = boxes[pattern[0]].innerText
      let pos2Val = boxes[pattern[1]].innerText
      let pos3Val = boxes[pattern[2]].innerText
      if(pos1Val != "" && pos2Val != "" && pos3Val!= "") {
        if(pos1Val === pos2Val && pos2Val === pos3Val){
            showWinner(pos1Val);
            disableboxes();
        }
      }
      
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

window.addEventListener('load', function() {
    // Hide loading overlay and show content after a delay
    setTimeout(function() {
        document.getElementById('loadingOverlay').style.display = 'none';
        document.getElementById('mainpage').style.display = 'block';
    }, 2000); // 2 seconds delay
});


