const countChar = (string, char) => {
  let count = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === char) count += 1;
  }
  return count;
};

const countBs = (string) => {
    return countChar(string, 'b')
}

console.log(countChar('kakkerlak', 'k'));
console.log(countBs('bumblebee'))