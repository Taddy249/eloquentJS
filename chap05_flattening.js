// function declaration
function flattening(array) {
  return array.reduce((a, b) => a.concat(b), []);
}

// function expression
let a = function(array) {
  return array.reduce((a, b) => a.concat(b), []);
}

// arrow function
let result = array => {
  return array.reduce((a, b) => a.concat(b), []);
}
