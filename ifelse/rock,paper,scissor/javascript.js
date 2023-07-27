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
      finalresult = "tie match";
    } else if (computerresult === "paper") {
      finalresult = "you loose";
    } else {
      finalresult = "you won";
    }
  } else if (usermoves === "scissor") {
    if (computerresult === "rock") {
      finalresult = "you loose";
    } else if (computerresult === "paper") {
      finalresult = "you won";
    } else {
      finalresult = "match tie";
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
  alert(
    `you pick ${usermoves}. computer pick ${computerresult} ${finalresult}`
  );
}
