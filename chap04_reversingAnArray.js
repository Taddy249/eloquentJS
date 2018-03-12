// function declaration
function reverseArray (array) {
    let resultArray = [];
    for(let i = array.length - 1; i >= 0; i--) {
        resultArray.push(array[i]);
    }
    return resultArray;
}

function reverseArrayInPlace(array) {
    let length = array.length;
    let halfLength = Math.floor(length / 2);
    for (let i = 0; i <= halfLength - 1; i++) {
        let a = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length -1 - i] = a;
    }
    return array;
}


// function expression
let reverseArray = function (aray) {
    let resultArray = [];
    for(let i = array.length - 1; i >= 0; i--) {
        resultArray.push(array[i]);
    }
    return resultArray;
}

let reverseArrayInPlace = function (array) {
    let halfLength = Math.floor(array.length / 2);
    for(let i = 0; i <= halfLength - 1; i++) {
        let a = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = a;
    }
    return array;
}