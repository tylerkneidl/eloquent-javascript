const loop = (value, testFunc, updateFunc, bodyFunc) => {
  if (testFunc(value)) {
    bodyFunc(value);
    loop(updateFunc(value), testFunc, updateFunc, bodyFunc);
  } else return;
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
