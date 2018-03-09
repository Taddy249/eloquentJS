// function declaration
function isEven(n) {
  if (n == 0){
    return true;
  } else if (n == 1) {
    return false;
  } else {
    if (n > 0) {
      return isEven(n - 2);
    } else {
      return isEven(n + 2);
    }
  }
}

// function expression
let isEven = function(n) {
  if (n == 0) {
    return true;
  } else if (n == 1) {
    return false;
  }
  return n > 0 ? isEven(n - 2) : isEven(n + 2);
}
