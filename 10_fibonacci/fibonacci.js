const fibonacci = function (num) {
  let prev = 0;
  let current = 1;
  let temp;
  if (num < 0) {
    return "OOPS";
  }
  if (num == 0) {
    return 0;
  }

  for (let i = 2; i <= num; i++) {
    temp = current;
    current += prev;
    prev = temp;
  }
  return current;
};

// Do not edit below this line
module.exports = fibonacci;
