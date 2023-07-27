const score = JSON.parse(localStorage.getItem("scores"));

function data(usermove) {
  let computerresult = game();
  let result = "";
  if (usermove === "head") {
    if (computerresult === "head") {
      result = "won";
      score.wins += 1;
    } else {
      result = "loose";
      score.lose += 1;
    }
  } else {
    if (computerresult === "tails") {
      result = "won";
      score.wins++;
    } else {
      result = "loose";
      score.lose++;
    }
  }
  alert(`${result}\n wins:${score.wins} lose:${score.lose}`);
  localStorage.setItem("scores", JSON.stringify(score));
}

function game() {
  let computervalue = Math.random();
  let computerresult = "";

  if (computervalue >= 0 && computervalue < 1 / 2) {
    computerresult = "head";
  } else {
    computerresult = "tails";
  }
  return computerresult;
}
function reset() {
  score.wins = 0;
  score.lose = 0;
}
