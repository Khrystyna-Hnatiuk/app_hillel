

function add() {
    let sum = 0;
    return function (n) {
        sum += n;
        return sum;
    }

}
let sum = add();
console.log(sum(4))
console.log(sum(6))
console.log(sum(10))
console.log(sum(7))
