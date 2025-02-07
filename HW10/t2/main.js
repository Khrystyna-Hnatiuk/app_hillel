// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву,
//  в якому лише парні числа з оригінального масиву.


const arr = [2, 3, 6, 8, 0, 99, 43, 232, 33, 65, 11];
function evenNumbers(arr) {
    // let even=[];
    if (Array.isArray(arr)) {
        return arr.filter(element => element % 2 === 0);

    }
    return []
}
console.log(evenNumbers(arr))
console.log(evenNumbers('fds'))


