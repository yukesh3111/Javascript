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
  let computer = document.querySelector(".computermove");
  if (computermove >= 0 && computermove < 1 / 3) {
    computer.innerHTML = document.querySelector(".rock").innerHTML;
    computerresult = "rock";
  } else if (computermove >= 1 / 3 && computermove < 2 / 3) {
    computer.innerHTML = document.querySelector(".paper").innerHTML;
    computerresult = "paper";
  } else {
    computer.innerHTML = document.querySelector(".scissor").innerHTML;
    computerresult = "scissor";
  }
  return computerresult;
}

function result(usermoves) {
  let computerresult = computermoves(usermoves);
  let finalresult = "";
  let usermove = document.querySelector(".userpick");
  if (usermoves === "rock") {
    let rock_active = document.querySelector(".rock");
    usermove.innerHTML = rock_active.innerHTML;
    if (computerresult === "rock") {
      finalresult = "Match  was tie";
      count.tie += 1;
    } else if (computerresult === "paper") {
      finalresult = "You loose the match";
      count.lose += 1;
    } else {
      finalresult = "You won the match";
      count.wins += 1;
    }
  } else if (usermoves === "scissor") {
    let rock_active = document.querySelector(".scissor");
    usermove.innerHTML = rock_active.innerHTML;
    if (computerresult === "rock") {
      finalresult = "You loose the match";
      count.lose += 1;
    } else if (computerresult === "paper") {
      finalresult = "You won the match";
      count.wins += 1;
    } else {
      finalresult = "Match  was tie";
      count.tie += 1;
    }
  } else {
    let rock_active = document.querySelector(".paper");
    usermove.innerHTML = rock_active.innerHTML;
    if (computerresult === "rock") {
      finalresult = "You won the match";
      count.wins += 1;
    } else if (computerresult === "paper") {
      finalresult = "Match  was tie";
      count.tie += 1;
    } else {
      finalresult = "You loose the match";
      count.lose += 1;
    }
  }
  let score = document.querySelector(".count");
  let computerpick = document.querySelector(".score");
  score.innerHTML = `wins: ${count.wins} loose: ${count.lose} tie: ${count.tie}`;
  computerpick.innerHTML = finalresult;
  localStorage.setItem("result", JSON.stringify(count));
}
