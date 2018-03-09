// function declaration
function countBs(a) {
  let count = 0;
  let stringToArray = a.split('');
  for(let i = 0; i < stringToArray.length; i++){
    if(stringToArray[i] == 'b' || stringToArray[i] == 'B'){
      count += 1;
    }
  }
  return count;
}

function countChar(a, b) {
  let count = 0;
  let stringToArray = a.split('');
  for(let i = 0; i < stringToArray.length; i++){
    if(b == stringToArray[i]){
      count += 1;
    }
  }
  return count;
}

// expression function
let countChar = function(a, b) {
  let count = 0;
  let stringToArray = a.split('');
  for(let i = 0; i < stringToArray.length; i++) {
    if(b == stringToArray[i]) {
      count += 1;
    }
  }
  return count;
}
