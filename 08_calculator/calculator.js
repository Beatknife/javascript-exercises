const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, nextNumber) => total + nextNumber, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, nextNumber) => total * nextNumber);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(a) {
	if (a === 0) {
    return 1;
  }

  let factorial = 1;
  
  for (let i = a; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
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
