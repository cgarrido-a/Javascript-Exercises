"use strict";

let incognitoNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector(".score").textContent);
let highscore = Number(document.querySelector(".highscore").textContent);

function displayMessage(message){
  document.querySelector(".message").textContent = message
}

document.querySelector(".check").addEventListener("click", function () {

  let inputValue = Number(document.querySelector("input").value);

  if (!inputValue) {
    displayMessage("🤔 Choose a number!!!");

  } else if (inputValue === incognitoNumber) {
    document.querySelector(".number").textContent = incognitoNumber;
    document.querySelector("body").style.backgroundColor = "green";
      displayMessage("🎊 Congratulations, you won !!!");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

  } else if (inputValue !== incognitoNumber){
      score--;
      document.querySelector(".score").textContent = score;

      if (score > 0) {
        inputValue < incognitoNumber ? displayMessage( "⬇️ Too Low") : displayMessage("⬆️ Too High");
        } else {
          displayMessage("😢You lost the game");
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  displayMessage("Start Guessing...");
  document.querySelector("input").value = "";
  document.querySelector(".number").textContent = "?";
  incognitoNumber = Math.trunc(Math.random() * 20 + 1);
});
