// Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N

let num = prompt("Enter number");
for (let i = 1; i <= 100; i++) {
  if (i * i <= num) {
    console.log(i * i);
  }
}
