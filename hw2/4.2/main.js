const digit = prompt("enter number");
const splittedDigit = digit.toString().split("");
if (
  splittedDigit[0] == splittedDigit[1] &&
  splittedDigit[1] == splittedDigit[2] &&
  splittedDigit[0] == splittedDigit[2]
) {
  console.log("All numbers are equal");
} else if (
  splittedDigit[0] == splittedDigit[1] ||
  splittedDigit[1] == splittedDigit[2] ||
  splittedDigit[0] == splittedDigit[2]
) {
  console.log("among the number there are numbers that are the same");
}
else{
    console.log(`all numbers are not equal`)
}