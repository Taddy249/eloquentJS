// function declaration
function range(start, end) {
    let result_array = [];
    result_array.push(start);
    while(start < end) {
        start += 1;
        result_array.push(start);
    }
    return result_array;
}

function sum(array) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return sum;
}

// function expression
let range = function(start, end) {
    let resultArray = [];
    resultArray.push(start);
    while(start < end) {
        start += 1;
        resultArray.push(start);
    }
    return resultArray;
}

let sumOfArray = function(array) {
    let sum = 0;
    for (let element of array) {
        sum += element;
    }
    return sum;
}

// arrow function
let resultArray = [];
let range = (start, end, step = 1) => {
    resultArray.push(start);
    if (step > 0) {
        while (start < end) {
            start += step;
            if (start <= end) {
                resultArray.push(start);
            } else {
                break;
            }
        }
    } else {
        while (start > end) {
            start += step;
            if (start >= end) {
                resultArray.push(start);
            } else {
                break;
            }
        }
    }
}