let turn="X";
let audioPlay= new Audio("ting.mp3")
let gameover=false;

function changeTurn(){
    return turn==="X"?"O":"X";
}


// Game logic 
const checkWin=()=>{
    let boxtext=document.getElementsByClassName("boxtext");
    let wins=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8]
    ]

    wins.forEach(e=>{
        if((boxtext[e[0]].innerText===boxtext[e[1]].innerText) && (boxtext[e[0]].innerText===boxtext[e[2]].innerText) &&( boxtext[e[0]].innerText!=="")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + " won";
            gameover=true;
        }
    })
}


// Main block 
const cell=document.getElementsByClassName("box");
Array.from(cell).forEach(ele=>{
    let boxtxt = ele.querySelector('.boxtext');
    ele.addEventListener('click',()=>{
        if(!gameover  && boxtxt.innerText===''){
            boxtxt.innerText=turn;
            turn=changeTurn();
            audioPlay.play();
            checkWin();
            if(!gameover){
                document.getElementById("txt").innerText= turn;
            }
        }
    })
})


// RESET
let btn=document.getElementById('btn').addEventListener('click',()=>{
    const cell= document.querySelectorAll('.boxtext');
    Array.from(cell).forEach(ele=>{
        ele.innerText=""
    })
    turn ="X";
    gameover=false;
    if(!gameover){
        document.getElementById("txt").innerText= turn;
    } 
})


