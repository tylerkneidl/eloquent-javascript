const deepEqual = (arg1, arg2) => {
  if (arg1 === arg2) return true;
  if (
    typeof arg1 !== "object" ||
    arg1 === null ||
    typeof arg2 !== "object" ||
    arg2 === null
  ) {
    return false;
  }

  let keys1 = Object.keys(arg1);
  let keys2 = Object.keys(arg2);
  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(arg1[key], arg2[key])) return false;
  }
  return true;
};

let obj = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
