const removeFromArray = function (array, ...items) {
  /* let filteredArray = array;
  for (let item of items) {
    filteredArray = filteredArray.filter((elem) => elem !== item);
    console.log(filteredArray);
  }

  console.log(filteredArray);
  return filteredArray; */

  //instead of checking that each elem is not the same as the one that should be removed you asked if it is included in the items array. Saves one loop.

  return array.filter((elem) => !items.includes(elem));
};

// Do not edit below this line
module.exports = removeFromArray;
