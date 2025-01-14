let str = "";
for (let i = 20; i <= 30; i += 0.5) {
  str += i + " ";
}

let strWithComma = str.replace(/\./g,',')
console.log(strWithComma);
