const add = function() {
  let newVal =0
  for(let i =0;i<arguments.length; i++){
    newVal+= arguments[i];
  }
  return newVal;
	
};

const subtract = function() {
	return arguments[0]-arguments[1];
};

const sum = function() {
  return arguments[0].reduce((sum,elmnt)=>sum +elmnt, 0);
	
};

const multiply = function() {
  return arguments[0].reduce((sum,elmnt)=>sum*elmnt, 1);
};

const power = function() {
	return arguments[0]**arguments[1]
};

const factorial = function() {
  let factorialVal=1;
	for(let i = 1; i<=arguments[0];i++){
    factorialVal *= i
  }
  return factorialVal
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
