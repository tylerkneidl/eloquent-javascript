const fizzBuzz = () => {
  for (let i = 1; i <= 100; i += 1) {
    let output = "";
    if (i % 3 === 0) output += "fizz";
    if (i % 5 === 0) output += "buzz";
    console.log(output || i);
  }
};

fizzBuzz();
