const ftoc = function(farenheitTemperature) {
  return Math.round(((farenheitTemperature-32)* (5/9))*10)/10
};

const ctof = function(celsiusTemperature) {
  return Math.round(((celsiusTemperature*(9/5))+32)*10)/10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

