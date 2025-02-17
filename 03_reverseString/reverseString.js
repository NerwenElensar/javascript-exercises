const reverseString = function (string) {
  let stringArray = string.split("");
  let reversedStringArray = [];
  let tempChar;

  console.log(stringArray);
  for (let i = 0; i < string.length; i++) {
    tempChar = stringArray.pop();
    reversedStringArray.push(tempChar);
  }

  return reversedStringArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
