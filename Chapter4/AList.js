const arrayToList = (array) => {
  if (array.length === 0) return null;
  return { value: array[0], rest: arrayToList(array.slice(1)) };
};

const listToArray = (list) => {
    const array = [list.value]
    if(list.rest === null) return array
    return array.concat(listToArray(list.rest))
};

console.log(arrayToList([1, 2, 3]));
console.log(listToArray(arrayToList([1,2,3])))