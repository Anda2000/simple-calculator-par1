
//ADD function 
function add(num1, num2) {
  return num1 + num2;
}



function add() {
  let sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// Multiply function

function multiply(num1, num2) {
  return num1 * num2;
}
function multiply() {
  let product = 1;
  for (var i = 0; i < arguments.length; i++) {
    product *= arguments[i];
  }
  return product;
}

module.exports = {
  add,
  multiply
};

