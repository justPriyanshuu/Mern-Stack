let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;

let h4=document.querySelector("h4");

let btns=["one","two","three","four"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },500);
}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },500);
}

function levelUp(){
    level++;
    h4.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);

    btnFlash(randbtn);
}

function btnPress(){
    let btn=this;
    userFlash(btn);
}

let allbtn=document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click",btnPress)
}