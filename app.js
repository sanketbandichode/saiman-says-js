let gameseq = [];
let userseq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;

let h4 = document.querySelector("h4");

document.addEventListener ("keypress", function(){
   if (started == false) {
    started = true;
    LevelUp();
   }
});

function btnFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function(){
      btn.classList.remove("flash")
   },250);
}

function LevelUp() {
   userseq = [];
   level++;
   h4.innerText = `Level ${level}`;  

   let randIdx = Math.floor(Math.random()*3);
   let randomClr = btns[randIdx];
   let randBtn = document.querySelector(`.${randomClr}`);

   gameseq.push(randomClr);
   console.log(gameseq)

   // console.log(randIdx);
   // console.log(randBtn)
   // console.log(randomClr)

   btnFlash(randBtn);
};

function checkAns(idx){
   // console.log("current level :", level);
   

   if (userseq[idx]===gameseq[idx]) {
     if(userseq.length == gameseq.length){
      setTimeout(LevelUp,1000); 
     }
   } else{
   h4.innerHTML = `Game over! Press any key to restart <br> <b>Your Score was ${level}</b>`;
   reset();
   }
}

function btnpress(){
   // console.log(this);
   let btn= this;
   btnFlash(btn);

   userColour = btn.getAttribute("id");
   console.log(userColour);
   userseq.push(userColour);

   checkAns(userseq.length-1)
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
   btn.addEventListener("click",btnpress);
}

function reset() {
   started = false;
   gameseq = [];
   userseq = [];
   level = 0;
}