const repeatString = function (string, amount) {
  let repeatedString = "";
  if (amount < 0) {
    repeatedString = "ERROR";
  }
  for (let i = 0; i < amount; i++) {
    repeatedString += string;
  }
  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
