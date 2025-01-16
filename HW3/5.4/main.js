// Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно
// (простим називається число, більше 1, що не має інших дільників, крім 1 і себе).
let input = parseInt(prompt("enter number"));
let num = parseInt(input, 10);
//
if (isNaN(num) || num <= 1) {
  console.log("Enter number > 1");
} else {
  let isSimple = true;

  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) {
      isSimple = false;
      break;
    }
  }
  if (isSimple) {
    console.log(`${num} is a prime number`);
  } else {
    console.log(`${num} is not prime number`);
  }
}
