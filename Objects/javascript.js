const count = {
  wins: 0,
  lose: 0,
  tie: 0,
};
function reset() {
  count.wins = 0;
  count.lose = 0;
  count.tie = 0;
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

function result(usermoves, computerresult) {
  let finalresult = "";
  if (usermoves === "rock") {
    if (computerresult === "rock") {
      finalresult = "match  was tie";
    } else if (computerresult === "paper") {
      finalresult = "you loose the match";
    } else {
      finalresult = "you won the match";
    }
  } else if (usermoves === "scissor") {
    if (computerresult === "rock") {
      finalresult = "you loose the match";
    } else if (computerresult === "paper") {
      finalresult = "you won the match";
    } else {
      finalresult = "match  was tie";
    }
  } else {
    if (computerresult === "rock") {
      finalresult = "you won the match";
    } else if (computerresult === "paper") {
      finalresult = "match  was tie";
    } else {
      finalresult = "you loose the match";
    }
  }
  if (finalresult === "you won the match") {
    count.wins += 1;
  } else if (finalresult === "you loose the match") {
    count.lose += 1;
  } else {
    count.tie += 1;
  }
  alert(
    `you pick ${usermoves}. computer pick ${computerresult} ${finalresult}\nwins: ${count.wins} loose: ${count.lose} tie: ${count.tie}`
  );
}
