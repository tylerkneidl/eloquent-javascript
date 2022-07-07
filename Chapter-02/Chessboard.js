const chessboard = (size) => {
  let hashTag = false;
  let output = "";
  for (let i = 1; i <= size * size; i += 1) {
    hashTag ? (output += "#") : (output += " ");
    if (i % size === 0) {
      output += "\n";
      hashTag = !hashTag;
    }
    hashTag = !hashTag;
  }
  console.log(output);
};

chessboard(8);
