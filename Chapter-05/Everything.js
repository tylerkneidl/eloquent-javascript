//with loop
const every = (array, test) => {
  let output = true;
  for (let i = 0; i < array.length; i += 1) {
    if (test(array[i]) === false) {
      output = false;
      i === array.length;
    }
  }
  return output;
};

//with some  a && b equals !(!a || !b)
const everyWithSome = (array, test) => {
    return !array.some(el => !test(el))
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

console.log(everyWithSome([1, 3, 5], n => n < 10));
// → true
console.log(everyWithSome([2, 4, 16], n => n < 10));
// → false
console.log(everyWithSome([], n => n < 10));
// → true