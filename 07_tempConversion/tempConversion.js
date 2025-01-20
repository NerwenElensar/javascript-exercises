const convertToCelsius = function (tempInF) {
  //°C = (°F − 32) × 5/9
  return Number.parseFloat(((tempInF - 32) * (5 / 9)).toFixed(1));
};

const convertToFahrenheit = function (tempInC) {
  //(Temperature in degrees Celsius (°C) * 9/5) + 32.
  return Number.parseFloat((tempInC * (9 / 5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
