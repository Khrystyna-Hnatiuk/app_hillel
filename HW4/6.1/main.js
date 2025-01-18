// function deleteArrayChar(str, char) {
//   let newStr = "";
//   for (let elem of str) {
//     if (!char.includes(elem)) {
//       newStr += elem;
//     }
//   }
//   return newStr;
// }

// console.log(deleteArrayChar("hello world", ["l", "d"]));

function deleteArrayChar(str, char) {
  let toArray = str.split("");
  let result = toArray.filter((elem) => !char.includes(elem)).join("");
  return result;
}

console.log(deleteArrayChar("hello world", ["l", "d"]));
