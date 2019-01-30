// 1. Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function makeItBig(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > 0) {
            arr[i] = 'big';
        }
    }
    return arr;
}
console.log(makeItBig([1,2,3,4,-4]));

console.log('---------');
// 2. Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printReturn(arr) {
    var low=arr[0];
    var high=arr[0];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < low) {
            low = arr[i];
        }
        if(arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(low);
    return high;
}

console.log(printReturn([2,3,1,55]));

console.log('---------');

// 3. Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

// The function should print the second-to-last value in the array,
//  and return the first odd value in the array.

function returnAnother(arr) {
    console.log(arr[arr.length-2]);
    for(var i=0; i<arr.length; i++){
        if(arr[i] % 2 == 1) {
            return arr[i];
        }
    }
}

console.log(returnAnother([1,2,3,4,5,4,5,7,8]));

console.log('---------');

// 4. Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(arr) {
    var newArr=[];
    for(var i=0; i<arr.length; i++) {
        var temp = arr[i] + arr[i];
        newArr.push(temp);
    }
    return newArr;
}
var array = [1,2,3];
console.log(doubleVision(array));
console.log(array);

console.log('---------');

// 5. Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countPos(arr) {
    var count=0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > 0 ) {
            count++;
        }
        var last = arr.length-1;
        arr[last] = count;
    }
    return arr;
}
var array1 = [-1,-1,-2,5];
console.log(countPos(array1));

console.log('---------');

// 6. Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensOdds(arr) {
    var countOdd=0;
    var coundEven=0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] % 2 == 0) {
            countEven++;
        } else if(arr[i] % 2 == 1) {
            countOdd++;
        } 

        if(countEven >= 3) {
            console.log('Thats Evan');
        } else if(countOdd >= 3) {
            console.log('Thats Odd');
        }
    }
    return arr;
}

console.log('---------');

// 7.  Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function incrementSeconds(arr) {
    for(var i=0; i<arr.length; i++) {
        if(i % 2 == 1) {
            arr[i] = arr[i] + 1;
        }
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementSeconds([1,2,3,4,5]));

console.log('---------');

// 8. Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  
// Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  
// For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

function previousLeng(arr) {
    for(var i=arr.length-1; i>0; i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}

console.log(previousLeng(["Albi", "Albiona", "Hoti", "Itohal"]));

console.log('---------');

// 9.  Add Seven to Most - Build a function that accepts an array. 
//     Return a new array with all the values of the original, but add 7 to each. Do not alter the original array. 
//     Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function addSeven(arr) {
    var newArr=[];
    for(var i=0; i<arr.length; i++) {
        var temp = arr[i] + 7;
        newArr.push(temp);
    }
    return newArr;
}

var arr= [1,2,3];

console.log(addSeven(arr));
console.log(arr);

console.log('---------');
// 10.  Reverse Array - Given an array, write a function that reverses its values, in-place. 
//      Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  
//      Do this without creating an empty temporary array.  (Hint: you'll need to swap values).

function reverseArr(arr) {
    for(var i=arr.length-1; i>0; i--) {
        arr.push(arr[i-1]);
    }
    return arr; 
}
var arrayre = [1,2,3,4,5];
console.log(reverseArr(arrayre));
console.log(arrayre);                   //////////// 

console.log('---------');

// 11. Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, 
// but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function neg(arr) {
    var newArr=[];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            newArr.push(arr[i]);
        }else if(arr[i] > 0) {
            newArr.push(arr[i] * -1);
        }
    }
    return newArr;
}

console.log(neg([1,3,4,-2,-5]));

console.log('---------');

// 12. Always Hungry - Create a function that accepts an array, 
//     and prints "yummy" each time one of the values is equal to "food".  
//     If no array values are "food", then print "I'm hungry" once.

function hung(arr) {
    var isHungry = false;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] === 'food') {
            console.log('yummy');
            isHungry=true;
        }
    }
    if(isHungry == false) {
        console.log('I`m hungry');
    }

    return arr;
}
console.log(hung(['no', 'no']));

// 13. Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  
//     Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].
//     swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

console.log('---------');

function swToCenter(arr) {
    for(var i=0; i<arr.length/2; i+=2) {
        var temp=arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}


var arrayrer = [1,2,3,4,5,6,7,8,9,10,11];
console.log(swToCenter(arrayrer));

console.log('---------');

// 14. Scale the Array - Given an array arr and a number num, 
//     multiply all values in the array arr by the number num, and return the changed array arr.
//     For example, scaleArray([1,2,3], 3) should return [3,6,9].

function scaleArr(arr, num) {
    for(var i=0; i<arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}

console.log(scaleArr([1,2,3], 9));
