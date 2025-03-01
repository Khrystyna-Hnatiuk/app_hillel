class Calculator {
    add(a, b) {
        if (typeof (a) === 'number' && typeof (b) === 'number') return a + b;
        else { return 'Введіть чисельні значення' }
    }

    subtract(a, b) {
        if (typeof (a) === 'number' && typeof (b) === 'number') return a - b;
        else { return 'Введіть чисельні значення' }

    }
    multiply(a, b) {
        if (typeof (a) === 'number' && typeof (b) === 'number') return a * b;
        else { return 'Введіть чисельні значення' }

    }
    divide(a, b) {
        if (typeof (a) === 'number' && typeof (b) === 'number') return a / b;
        else { return 'Введіть чисельні значення' }

    }

}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.add(5, 'fs')); // 8


console.log(calc.subtract(10, 4)); // 6

console.log(calc.multiply(3, 6)); // 18

console.log(calc.divide(8, 2)); // 4