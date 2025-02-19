const palindromes = function (str) {
  let cleanedUpStringArr = str
    .toLowerCase()
    .trim()
    .split("")
    .filter((char) => /[a-z0-9]/.test(char));

  const lastCharIndex = cleanedUpStringArr.length - 1;
  for (let i = 0; i <= lastCharIndex; i++) {
    if (lastCharIndex - i < i) {
      return true;
    } else if (cleanedUpStringArr[i] !== cleanedUpStringArr[lastCharIndex - i]) {
      return false;
    }
  }
};

// Do not edit below this line
module.exports = palindromes;
