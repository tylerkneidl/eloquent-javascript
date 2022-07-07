const reverseArray = (array) => {
  return array.reduce((acc, cv) => {
    acc.unshift(cv);
    return acc;
  }, []);
};

const reverseArrayInPlace = (array) => {
  let temp;
  for (let i = 0; i < Math.floor(array.length / 2); i += 1) {
    temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
};

let arrayValue = [1, 2, 3, 4, 5];

console.log(reverseArray(["a", "b", "c"]));

reverseArrayInPlace(arrayValue);

console.log(arrayValue);
