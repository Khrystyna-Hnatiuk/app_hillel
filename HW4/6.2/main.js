function averageSum(arr) {
    const newarray = arr.filter((item) => typeof item === "number");
    console.log(newarray);
    if (newarray.length === 0) {
      return "0 numeric  in array";
    }
  
    const sum = newarray.reduce((accum, current) => accum + current, 0);
    const average = sum / newarray.length;
  
    return average;
  }
  const arr1 = ["hello", 1, 7, 9, "c", "apple", 6, false, true, 44, "8"];
  const arr2 = ["hello", false, true];
  console.log(averageSum(arr1));
  console.log(averageSum(arr2));
  


//Стрілкова функція
// let averageSum = (array) => {
//   const newArray = [];
//   let sum = 0;

//   for (let elem of array) {
//     if (typeof elem === "number") {
//       newArray.push(elem);
//       sum += elem;
//     }
//   }
//   if (newArray.length === 0) {
//     return "0 numeric elements in array";
//   }
//   return sum / newArray.length;
// };
// const arr1 = ["hello", 1, 7, 9, "c", "apple", 6, false, true, 44, "8"];
// const arr2 = ["hello", false, true];
// console.log(averageSum(arr1));
// console.log(averageSum(arr2));



//динамічна функція
// let averageSum =new Function ('array','  let newArray = []; let sum = 0; for (let elem of arr) {   if (typeof elem === "number") {     newArray.push(elem);     sum += elem;   } } return sum / newArray.length;')
//  const arr = ["hello", 1, 7, 9, "c", "apple", 6, false, true, 44.8];
// console.log(averageSum(arr));
