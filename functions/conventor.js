function converttofahrenheit(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  console.log(`${fahrenheit}F`);
}
function converttoclesius(fahrenheit) {
  let celsius = (fahrenheit - 32) * (5 / 9);
  console.log(`${celsius}C`);
}
function converttemperature(degrees, unit) {
  if (unit === "C" || unit === "c") {
    converttofahrenheit(degrees);
  } else {
    converttoclesius(degrees);
  }
}
