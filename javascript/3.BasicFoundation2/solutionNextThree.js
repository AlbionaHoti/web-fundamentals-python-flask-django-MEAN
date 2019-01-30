// Author: Todd Enders

// Count Positives - Given array of numbers, create function to replace last value with number of positive values.  Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr){
    var positives = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] > 0){
            positives++;
        }
    }
    arr[arr.length-1] = positives;
    return arr;
}
// console.log(countPositives([1,1,0,0]));

// Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!"

function evensOdds(arr){
    var odds = 0;
    var evens = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            odds++;
            evens = 0;
        }else{
            evens++;
            odds = 0;
        }
        if (odds == 3){
            console.log("That's odd!");
            odds = 0;
        }else if(evens == 3){
            console.log("Even more so!");
            evens = 0;
        }
    }
}
// evensOdds([1,1,1,2,2,1,1,1])

// Increment the Seconds - Given an array of numbers arr, add 1 to every second element, specifically those whose index is odd (arr[1], [3], [5], etc).  Afterward. console.log each array value and return arr.

function incrementSeconds(arr){
    for(var i = 1; i < arr.length; i+=2){
        arr[i] = arr[i] + 1;
    }
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    return arr;
}

console.log(incrementSeconds([1,2,3,4,5]));