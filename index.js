// prompt("What is your name?");

var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber + ".png";
var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomDiceImage2 = "dice" + randomNumber2 + ".png";
// var randomImageSource2 = "images/" + randomDiceImage2;
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImageSource2);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
var images2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);
if(randomImageSource > randomImageSource2){
  document.querySelector("h1").innerHTML = "Player 1 Wins";
  // alert("Player 1 Wins");
}
else if(randomImageSource < randomImageSource2){
  document.querySelector("h1").innerHTML = "Player 2 Wins";
  // alert("Player 2 Wins");
} else {
  document.querySelector("h1").innerHTML = "Draw!!!!";
}
