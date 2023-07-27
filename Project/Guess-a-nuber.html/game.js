0.let chance = 9;
let computermove = Math.round(Math.random() * 100);
console.log(computermove);
function game() {
  let res, res1;
  let usermove = parseInt(document.querySelector(".input").value);
  let display1 = document.querySelector(".result");
  let display2 = document.querySelector(".count");
  if (usermove === computermove) {
    res = "Yippe you win!!";
    res1 = `You guessed it in ${10 - chance}  guesses`;
    display1.innerHTML = res;
    display2.innerHTML = res1;
  } else if (usermove > computermove && chance != 0) {
    res = "Choosen number is higher";
    chance -= 1;
    res1 = `You have ${chance}  guesses`;
    display1.innerHTML = res;
    display2.innerHTML = res1;
  } else if (usermove < computermove && chance != 0) {
    res = "Choosen number is lower";
    chance -= 1;
    res1 = `Your have ${chance}  guesses`;
    display1.innerHTML = res;
    display2.innerHTML = res1;
  } else {
    res = "GAME OVER";
    display1.innerHTML = res;
  }
}
