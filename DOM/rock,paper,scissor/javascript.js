let count = JSON.parse(localStorage.getItem("result"));
function reset() {
  count.wins = 0;
  count.lose = 0;
  count.tie = 0;
  localStorage.removeItem("result");
  let score = document.querySelector(".count");
  let computerpick = document.querySelector(".computermove");
  score.innerHTML = `wins: ${count.wins} loose: ${count.lose} tie: ${count.tie}`;
  localStorage.setItem("result", JSON.stringify(count));
}
if (count === null) {
  count = {
    wins: 0,
    lose: 0,
    tie: 0,
  };
}
function computermoves(usermoves) {
  let computermove = Math.random();
  let computerresult = "";
  let finalresult = "";
  if (computermove >= 0 && computermove < 1 / 3) {
    computerresult = "rock";
  } else if (computermove >= 1 / 3 && computermove < 2 / 3) {
    computerresult = "paper";
  } else {
    computerresult = "scissor";
  }
  return computerresult;
}

function result(usermoves) {
  let computerresult = computermoves(usermoves);
  let finalresult = "";
  if (usermoves === "rock") {
    if (computerresult === "rock") {
      finalresult = "match  was tie";
      count.tie += 1;
    } else if (computerresult === "paper") {
      finalresult = "you loose the match";
      count.lose += 1;
    } else {
      finalresult = "you won the match";
      count.wins += 1;
    }
  } else if (usermoves === "scissor") {
    if (computerresult === "rock") {
      finalresult = "you loose the match";
      count.lose += 1;
    } else if (computerresult === "paper") {
      finalresult = "you won the match";
      count.wins += 1;
    } else {
      finalresult = "match  was tie";
      count.tie += 1;
    }
  } else {
    if (computerresult === "rock") {
      finalresult = "you won the match";
      count.wins += 1;
    } else if (computerresult === "paper") {
      finalresult = "match  was tie";
      count.tie += 1;
    } else {
      finalresult = "you loose the match";
      count.lose += 1;
    }
  }
  let score = document.querySelector(".count");
  let computerpick = document.querySelector(".computermove");
  score.innerHTML = `wins: ${count.wins} loose: ${count.lose} tie: ${count.tie}`;
  computerpick.innerHTML = `you pick ${usermoves}. computer pick ${computerresult} ${finalresult}`;
  localStorage.setItem("result", JSON.stringify(count));
}
