let removeItem = (array, item) => {
  if (array.length === 0 ) {
    console.log("Array is empty");
    return;
  }
  if (!Array.isArray(array)) {
    console.log("Argument is not array");
    return;
  }
  let newArr = array.filter((elem) => elem !== item);
  return newArr;
};

const array = [1, 3, 4, 6, 2, 5, 7];
console.log(removeItem(array, 4));
console.log(removeItem(array, 10));
removeItem("hello", 10);
removeItem([])


