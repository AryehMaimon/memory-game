// Memory Game
let total = 0;
let clicks = [];
let turns = 0
const boardElement = document.getElementsByClassName("board")[0];
// const pointsBoardElement = document.getElementsByClassName("pointsBoard")
// pointsBoardElement.appendChild("timer")
// function creatTimer(){

// }
function creatCardsToBoard(numOfCards) {
  for (i = 0; i < numOfCards; i++) {
    const cardElement = document.createElement("div");
    cardElement.className = "card";
    cardElement.style.backgroundImage = 'url(cover.webp)'
    cardElement.show = arrayOfMixedCards[i];
    cardElement.onclick = (e) => {
      
      cardElement.style.backgroundImage = e.target.show
      clicks.push(e.target);
     
      if (clicks.length % 2 == 0) {
         setTimeout(()=>{
          if (
          clicks[clicks.length - 2].style.backgroundImage ==
          clicks[clicks.length - 1].style.backgroundImage
        ) {
          clicks[clicks.length - 2].onclick = 0
          clicks[clicks.length - 1].onclick = 0
          turns+=1
          total = total + 1;
        } else {
          
          clicks[clicks.length - 2].style.backgroundImage = 'url(cover.webp)';
          clicks[clicks.length - 2].style.backgroundsize = "cover"
          clicks[clicks.length - 1].style.backgroundImage = 'url(cover.webp)';
          clicks[clicks.length - 1].style.backgroundsize = "cover"
          turns+=1
        }
        if (total < 6) {
          console.log(total);
        } else {
          console.log("end of game");
          setTimeout(()=>{
           clicks.forEach((element)=>{
           element.style.background = 'url(cover.webp)'
            })
          },2000)
        }
      },500)
        console.log(turns)
      }
    };
    boardElement.appendChild(cardElement);
  }
}


let a = "url(alef1.jpg)";
let b = "url(bet1.jpg)";
let c = "url(gimel1.jpg)";
let d = "url(dalet1.jpg)";
let e = "url(hey1.jpg)";
let f = "url(vav1.jpg)";

let mix = [];
const stars = [];
const mainArray = [a, b, c, d, e, f];
let sum = 0;
function mixUp(arrayToMix) {
  for (i = 0; i < arrayToMix.length * 2; i++) {
    let x = Math.abs(Math.floor(Math.random() * arrayToMix.length));
    mix[i] = arrayToMix[x];
    let cnt = 0;
    for (j = 0; j < mix.length; j++) {
      if (arrayToMix[x] == mix[j]) {
        cnt++;
        if (cnt > 2) {
          i--;
          break;
        }
      }
    }
  }
  return mix;
}
let arrayOfMixedCards = mixUp(mainArray);
creatCardsToBoard(12);


mixUp(mainArray);
// starsLine(stars);

