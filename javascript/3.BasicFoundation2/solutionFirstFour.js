// Author: Todd Enders

// Biggie Size - Given an array, write a function that changes all positive numbers in the array to "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr){
    // iterate through the array
    for (var i = 0; i < arr.length; i++){
        // compare the value to 0 to make sure it's positive
        if (arr[i] > 0){
            // switch value to be 'big'
            arr[i] = "big";
        }
    }
    return arr;
}
// console.log(makeItBig([-1,3,5, 7,-5]));

// Print Low, Return High - Create a function that takes array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printLowReturnHigh(arr){
    var low = arr[0];
    var high = arr[0];
    for (var i = 1; i < arr.length; i++){
        if (arr[i] < low){
            low = arr[i];
        }else if (arr[i] > high){
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}

// console.log(printLowReturnHigh([50,-1,20,12]));

// Print One, Return Another - Build a function that takes array of numbers.  The function should print second-to-last value in the array, and return first odd value in the array.

function print2ndToLastReturnOdd(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            return arr[i];
        }
    }
}
// console.log(print2ndToLastReturnOdd([0,2,1,4,3]));

// Double Vision - Given array, create a function to return a new array where each value in the original has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing original.

function doubleVision(arr){
    var newArr = [];
    for (var i = 0; i < arr.length; i++){
        newArr.push(arr[i] * 2);
    }
    return newArr;
}
// console.log(doubleVision([1,2,3]));