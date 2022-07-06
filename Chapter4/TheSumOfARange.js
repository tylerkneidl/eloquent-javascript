const range = (arg1, arg2, step) => {
  let output = [];
  if (arg1 < arg2) {
    for (let i = arg1; i <= arg2; i += Math.abs(step) || 1) {
      output.push(i);
    }
  } else if (arg2 < arg1) {
    for (let i = arg1; i >= arg2; i -= Math.abs(step) || 1) {
      output.push(i);
    }
  } else {
    return [arg1];
  }
  return output;
};

const sumArray = (array) => {
  let sum = 0;
  array.forEach((num) => (sum += num));
  return sum;
};
console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sumArray(range(1, 10)));
