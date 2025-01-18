// function deleteArrayChar(str, char) {
//     str = prompt('Enter string');
//     char = prompt('Enter characters to delete');
// if(str===''|| char===''){
//     alert('Please,enter string or characters to delete');
//     return;
//  } 
// let lowStr = str.toLowerCase();
// let lowChar = char.toLowerCase();
//   let newStr = "";
//   for (let elem of lowStr) {
//     if (!lowChar.includes(elem)) {
//       newStr += elem;
//     }
//   }
//   return newStr ||'All characters were deleted';
// }

// console.log(deleteArrayChar());

function deleteArrayChar(str, char) {
     str = prompt('Enter string');
     char = prompt('Enter characters to delete');
     if(str===''|| char===''){
        alert('Please,enter string or characters to delete');
        return;
     } 
let lowStr = str.toLowerCase();
let lowChar = char.toLowerCase();
      let result = lowStr.split('').filter((elem) => !lowChar.includes(elem)).join("");
       return result || 'All characters were deleted';    
     }

console.log(deleteArrayChar())
