// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно
// (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
let num = parseFloat(prompt("enter number")); //7
//
if (num > 1) {
  let isSimple = true;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isSimple = false;
      break
    } 
  }
  if(isSimple){
    console.log('просте число')
  }
  else{
    console.log('не просте число')
  }
}

















