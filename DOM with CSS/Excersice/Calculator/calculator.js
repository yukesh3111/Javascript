function cal() {
  try {
    let input = document.querySelector(".result").value;
    let res = eval(input);
    let displaybar = (document.querySelector(".result").value = res);
  } catch (err) {
    let message = "invalid";
    document.querySelector(".result").value = "invalid input";
  }
}
function display(number) {
  document.querySelector(".result").value += number;
}
function cleardisplay() {
  document.querySelector(".result").value = "";
}
