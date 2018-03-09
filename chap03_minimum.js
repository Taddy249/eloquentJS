// tradition way, function declaration
function min(a, b) {
  return Math.min(a, b);
}

// function expression
let min = function (a, b) {
  return Math.min(a, b);
}

// arrow function with built-in function Math.min
let min = (b, c) => Math.min(b, c);

// arrow function with ternary operator
let min = (b, c) => b > c ? c : b;
