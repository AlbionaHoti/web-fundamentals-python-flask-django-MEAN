// this is part 2 of the assignment. Copy/paste the starter code from the platform like seen below 
//and edit the code to make it work.
function printAverage(x){
    var sum = 0;
    // your code here
    for(var i=0; i<x.length; i++){
      sum += x[i];
    }
    return sum/x.length;
 } 
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([2,5,8,11,14]);
 console.log(y); // should log 8


//  2) Create an array with all the odd integers between 1 and 255 (inclusive)

function returnOddArray(){
   // your code here
   var oddArray= [];
   for(var i=1; i<=255; i= i+2){
      return oddArray.push(i);
   }
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]


// 3) Square each value in a given array, returning that same array with changed values.

function squareValue(x){
   // your code here
   return x.map((v) => { 
      return Math.pow(v,2);
   });
}
y = squareValue([1,2,3]);
console.log(y); // should log [1,4,9]
  
y = squareValue([2,5,8]);
console.log(y); // should log [4,25,64]