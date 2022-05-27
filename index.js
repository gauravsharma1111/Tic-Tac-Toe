console.log("Tic tac toe by gaurav");
let writeAudio = new Audio();
let turn = "X";
let info = document.getElementById("info");
info.innerText = `Turn : ${turn}`
let isGameover=false;
let gameBox=document.getElementById('game-box');


function mark(element) {
    if(element.innerHTML=="" && !isGameover){
        element.innerHTML = turn;
        changeTurn();
        writeAudio.play();
        isAnyoneWin();
    }
}



function changeTurn() {
    if(turn === "X"){
        turn = "O" 
        writeAudio.src="./assets/X-sound.wav";   
    } 
    else{
        turn = "X";
        writeAudio.src="./assets/O-sound.wav";   
    }
    info.innerText = `Turn : ${turn}`
    return turn;
}

function isAnyoneWin(){
    let boxes=document.getElementsByClassName("box");
    winningArray=[
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ];
    winningArray.forEach((e)=>{
        if((boxes[e[0]].innerHTML===boxes[e[1]].innerHTML)&&(boxes[e[1]].innerHTML===boxes[e[2]].innerHTML)&& boxes[e[0]].innerHTML!==""){
            info.innerText=boxes[e[0]].innerHTML+" Wins";
            gameOver();
        }

    });  
}

const newGame = document.getElementById("newGame");
newGame.addEventListener('click', () => {

    const boxes = document.querySelectorAll('div.box');
    boxes.forEach((box) => {
        box.innerHTML = "";
    });
    turn = "X"
    info.innerText = `Turn : ${turn}`
    winDance.style.width="0px";  
    info.style.color="black";
    info.style.fontSize="41px";
    isGameover=false;
    gameBox.style.backgroundColor="white";
})

function gameOver() {
    let winDance=document.getElementById('winDance');
    winDance.style.width="160px";  
    info.style.color="#FF4742";
    info.style.fontSize="55px";
    isGameover=true;
    gameBox.style.backgroundColor="#d8d8d8";
}