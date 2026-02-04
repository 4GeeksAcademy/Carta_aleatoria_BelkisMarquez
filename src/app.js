import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let cardTwist = document.getElementById("card");

let generarCarta = () => {

  let suits = ["♦", "♥", "♠", "♣"];
  let nums = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomSuits = Math.floor(Math.random() * suits.length);
  let randomNums = Math.floor(Math.random() * nums.length);


  document.getElementById("num").innerHTML = nums[randomNums];
  document.getElementById("icon-superior").innerHTML = suits[randomSuits];
  document.getElementById("icon-inferior").innerHTML = suits[randomSuits];

  /* if (suits[randomSuits] == "♦" || suits[randomSuits] == "♥"
  ) {
    cardTwist.style.color = "red";
  }
  else {cardTwist.style.color="black"}; */

  cardTwist.style.color = suits[randomSuits] == "♦" || suits[randomSuits] == "♥" ? "red" : "black";
}
let CambioTamanio = () => {
  let widthCard = document.getElementById("width-card").value;
  let heigthCard = document.getElementById("heigth-card").value;

  cardTwist.style.width = widthCard + "%"
  cardTwist.style.height = heigthCard + "%"
}

window.onload = function () {

  generarCarta();

  let btnChange = document.getElementById("btn-change");
  btnChange.onclick = () => {
    generarCarta();
  }

  let btnSize = document.getElementById("btn-a");
  btnSize.onclick = () => {
    CambioTamanio()
  }

  setInterval(() => {
    generarCarta()
  }, 10000);
};
