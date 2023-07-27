function counter(event) {
  let text = document.querySelector("textarea");
  let output = document.querySelector(".output");
  output.innerHTML = `[${text.value.length}/40 ]`;
  if (text.value.length > 40) {
    text.classList.add("red");
  } else {
    text.classList.remove("red");
  }
}
