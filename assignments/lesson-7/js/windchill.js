//Defining Table:
// 1) gathers the two input values from the weather summary
// 2) calculates the windchill value
// 3) outputs the result to the new line item in the weather summary.

let tempF = parseInt(document.getElementById("temp").innerHTML);
let speed = parseInt(document.getElementById("windSpeed").innerHTML);
let chill = windChill(tempF, speed);

var digits = 2;
var multiplier = Math.pow(10, digits);
chill = Math.round(chill * multiplier) / multiplier;
document.getElementById("output").innerHTML = chill;

function windChill(tempF, speed) {
  result =
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speed, 0.16) +
    0.4275 * tempF * Math.pow(speed, 0.16);
  return result;
}
