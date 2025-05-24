let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let h4 = document.querySelector("h4");
let btns = ["one", "two", "three", "four"];

document.addEventListener("keypress", function () {
  if (!started) {
    startGame();
  }
});

document.querySelector("#start-btn").addEventListener("click", function () {
  if (!started) {
    startGame();
  }
});

function startGame() {
  started = true;
  setTimeout(levelUp, 1000);
}

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => btn.classList.remove("flash"), 500);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => btn.classList.remove("userflash"), 500);
}

function levelUp() {
  userSeq = [];
  level++;
  h4.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`#${randColor}`);
  gameSeq.push(randColor);
  btnFlash(randbtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h4.innerHTML = `Game Over! Score: <b>${level}</b><br>Press Space or Tap Start`;
    document.body.style.backgroundColor = "red";
    setTimeout(() => (document.body.style.backgroundColor = "black"), 200);
    resetGame();
  }
}

function resetGame() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allbtn = document.querySelectorAll(".box");
for (let btn of allbtn) {
  btn.addEventListener("click", btnPress);
}
