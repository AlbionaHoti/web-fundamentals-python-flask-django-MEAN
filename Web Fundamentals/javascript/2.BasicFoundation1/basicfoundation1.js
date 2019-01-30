// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

function first() {
    var arr=[];
    for(var i=1; i<=255; i++) {
        arr.push(i);
    } 
    return arr;
}
console.log(first());
// first();

console.log('-------------');

//  2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.

function evenSum() {
    var sum = 0;
    for(var i=1; i<=1000; i++) {
        if(i % 2 ==0) {
          sum += i;
        }
    }
    return sum;
}

console.log(evenSum());

console.log('-------------');

//  3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

function oddSum() {
    var sum = 0;
    for(var i=1; i<= 5000; i++) {
        if(i % 2 == 1) {
            sum += i;
            // console.log(i);
        }
    }
    return sum;
}

console.log(oddSum());

console.log('-------------');

//  4.Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).

function iterate(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

iterate([2,3,4,-2,4,6]);

// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

console.log('-------------');

function findMax(arr) {
    var max = arr[0];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

findMax([4,2,7,12,3,55]);

console.log('-------------');
// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

function findAvg(arr) {
    var avg;
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
        avg = sum / arr.length;
    }
    return avg;
}

console.log(findAvg([1,2,3,7,4,5]));

console.log('-------------');
// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.

function arrayOdd() {
    var arr = [];
    for(var i=1; i<50; i++) {
        if(i % 2 == 1) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(arrayOdd());

console.log('-------------');

// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).

function greaterY(arr, y) {
    var count=0;
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > y) {
            count++;
        }
    }
    return count;
}

console.log(greaterY([1,2,3,4,5,3],3));


console.log('-------------');

// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the product of the original value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

function squareVal(arr) {
    for(var i=0; i<arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

console.log(squareVal([2,3,4]));


console.log('-------------');

// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

function removeNegatives(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] =0;
        }
    }
    return arr;
}

console.log(removeNegatives([3,-2,4,-5,-6]));

console.log('-------------');

//  11. Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

function three(arr) {
    var min=arr[0];
    var max=arr[0];
    var avg=arr[0];
    var sum=0;
    var newArr=[];
    for(var i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        } else if(arr[i] < min) {
            min = arr[i];
        }

        sum += arr[i]; 
        avg = sum/arr.length;
    }
    
    newArr.push(max);
    newArr.push(min);
    newArr.push(avg);

    return newArr;
}

console.log(three([12,3,2]));

console.log('-------------');

// 12. Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

function swap(arr) {
    var temp = arr[arr.length-1];
    arr[arr.length-1] = arr[0];
    arr[0] = temp;
}
var test = [1,2,3,4,5];
swap(test);
console.log(test);

console.log('-------------');

// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].

function numToString(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 'Dojo'
        }
    }
    return arr;
}

console.log(numToString([1,-2,-4,-6]));

