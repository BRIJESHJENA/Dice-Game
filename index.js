var randomNum = Math.floor(Math.random() * 6) + 1;
var randomDice = "images/dice" + randomNum + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDice);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "images/dice" + randomNum2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (randomNum > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1!!";
} else if (randomNum < randomNum2) {
  document.querySelector("h1").innerHTML = "Player 2!!";
} else {
  document.querySelector("h1").innerHTML = "Draw!!!";
}