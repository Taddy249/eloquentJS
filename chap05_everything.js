// ver.1: using a loop
function every(array, test) {
  for(let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

// ver.2: using the some method
function every2(array, test) {
  return !array.some(element => !test(element));
}