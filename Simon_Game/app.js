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
        setTimeout(levelUp,1000);
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
    userSeq=[];
    level++;
    h4.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randbtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    btnFlash(randbtn);
}

function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h4.innerHTML=`Game Over! Your Score was <b>${level}</b> <br>Press any key`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="black";
        },200)
        resetGame();
    }
}

function resetGame(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns(userSeq.length-1);
}

let allbtn=document.querySelectorAll(".box");
for(btn of allbtn){
    btn.addEventListener("click",btnPress)
}