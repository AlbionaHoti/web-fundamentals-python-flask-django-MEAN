// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function buildArr(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        arr.push(i);
    }
    return arr;
}

var result = buildArr(); // <========>
// console.log(result);

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getSum(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++){
        if (i % 2 == 0){
            sum = sum + i;
        } 
    }
    return sum;
}
// console.log(getSum());


// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function getSumOdd(){
    var sum = 0;
    for (var i = 1; i <= 5000; i+=2){
        if (i % 2 == 1){
            sum = sum + i;
            console.log(i);
        }
    }
    return sum;
}
// console.log(getSumOdd());


// Iterate an array - Write a function that returns the sum of all the values within a given array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function iterate(numArr){
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    return sum;
}
// console.log(iterate([1,2,4]));


// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,-5,-6,-2] max is 7)
function findMax(numArr){
    var max = numArr[0]; // sets the maximum to the first value in the array
    for (var i = 0; i < numArr.length; i++){ // for loop to examine each value in the array
        // see if the next value is bigger than the maximum
        if (numArr[i] > max){
            // if it is, make it the new max
            max = numArr[i];
        }
    }
    return max;
}
// console.log(findMax([-3,-5,-6,-2]));

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function findAvg(numArr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < numArr.length; i++){
        sum = sum + numArr[i];
    }
    avg = sum / numArr.length;
    return avg;
}
// console.log(findAvg([1,3,5,7,20]));


