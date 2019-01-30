
// 1. Given an array and a value Y, count and print the number of array values greater than Y.

function greaterThan(arr, Y) {
  var count = 0;
  for(var i=0; i<arr.length; i++){
    if(arr[i] > Y) {
       count++;
    }
  }
  console.log(count);
}
greaterThan([1,2,33,4,5,6,6,6], 5);

// 2. Given an array, print the max, min and average values for that array.

function operations(x) {
  
  let avg = x.reduce((acc, val) => {
    return acc + val / x.length
  }, 0);
  
  let min = x.reduce((acc, val) => {
    return acc < val ? acc : val
  }, 0);

  let max = x.reduce((acc, val) => {
    return acc > val ? acc : val
  }, 0);

  console.log('Average of array: ', avg);
  console.log('Min of array: ', min);
  console.log('Max of array: ', max);
}

var array1 = [3,4,5,2,7,1];
operations(array1);

// 3. Given an array of numbers, create a function that returns a new array where negative values were replaced with the string ‘Dojo’.   For example, replaceNegatives( [1,2,-3,-5,5]) should return [1,2, "Dojo", "Dojo", 5].

function replace(x) {
  var newArr=[];
  for(var i = 0; i < x.length; i++) {
     var temp = x[i] < 0 ? 'Dojo': x[i];  
     newArr.push(temp);
  }
  console.log(newArr);
}

let replaceArr = [1,2,-3,-5,5];
replace(replaceArr);
console.log(replaceArr);

// 4.Given array, and indices start and end, remove values in that index range, working in-place (hence shortening the array).  For example, removeVals([20,30,40,50,60,70],2,4) should return [20,30,70].
 
function removeVal(arr, start, end){
    var removeIndex = end-start+1;
    for (var i = start; i <= removeIndex; i++){
        arr[i] = arr[i+removeIndex];
    }
    console.log(arr);
    arr.length = arr.length - removeIndex;
    return arr;
}
var res = removeVal([2,3,4,5,6], 1,3);
console.log(res);
// removeVal([2,3,4,5,6], 1,3);
