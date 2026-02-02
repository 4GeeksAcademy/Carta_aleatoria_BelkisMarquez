import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {


  let suits = ["♦", "♥", "♠", "♣"];
  let nums = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let randomSuits = Math.floor(Math.random() * suits.length);
  let randomNums = Math.floor(Math.random() * nums.length);

  let cardTwist = document.getElementById("card")
  document.getElementById("num").innerHTML = nums[randomNums];
  document.getElementById("icon-superior").innerHTML = suits[randomSuits];
  document.getElementById("icon-inferior").innerHTML = suits[randomSuits];

  if (suits[randomSuits] == "♦" || suits[randomSuits] == "♥"
  ) {
      cardTwist.style.color="red";
  }
  
  // cardTwist.style.color = suits[randomSuits] == "♦" || suits[randomSuits] == "♥" ? "red" : "green";

};
