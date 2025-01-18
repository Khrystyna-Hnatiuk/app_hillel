// function deleteArrayChar(str, char) {
//     str = prompt('Enter string');
//     char = prompt('Enter characters to delete');
//   let newStr = "";
//   for (let elem of str) {
//     if (!char.includes(elem)) {
//       newStr += elem;
//     }
//   }
//   return newStr;
// }

// console.log(deleteArrayChar());

function deleteArrayChar(str, char) {
     str = prompt('Enter string');
     char = prompt('Enter characters to delete');
  let toArray = str.split("");
  let result = toArray.filter((elem) => !char.includes(elem)).join("");
  return result;
}

console.log(deleteArrayChar())
