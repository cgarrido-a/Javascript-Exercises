"use strict";

let incognitoNumber = Math.trunc(Math.random() * 20 + 1);
let score = Number(document.querySelector(".score").textContent);
let highscore = Number(document.querySelector(".highscore").textContent);


document.querySelector(".check").addEventListener("click", function () {

  let inputValue = Number(document.querySelector("input").value);

  if (!inputValue) {
    document.querySelector(".message").textContent = "🤔 Choose a number!!!";

  } else if (inputValue === incognitoNumber) {
    document.querySelector(".number").textContent = incognitoNumber;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".message").textContent ="🎊 Congratulations, you won !!!";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

  } else if (inputValue < incognitoNumber) {
    score--;
    document.querySelector(".score").textContent = score;

    if (score > 0) {
      document.querySelector(".message").textContent = "⬇️ Too Low";
    } else {
      document.querySelector(".message").textContent = "😢You lost the game";
    }

  } else if (inputValue > incognitoNumber) {
    score--;
    document.querySelector(".score").textContent = score;

    if (score > 0) {
      document.querySelector(".message").textContent = "⬆️ Too High";
    } else {
      document.querySelector(".message").textContent = "😢You lost the game";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start Guessing...";
  document.querySelector("input").value = "";
  document.querySelector(".number").textContent = "?";
  incognitoNumber = Math.trunc(Math.random() * 20 + 1);
});
