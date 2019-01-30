//  function a(){
//     console.log('hello');
//   }
// console.log('Dojo');

// console.log('-------------------')

// function a2() {
//   console.log('hello');
//   return 15;
// }

// x = a2();
// console.log('x is', x);

console.log('---------------')

function c(n) {
  console.log('n is', n);
  y = n*2;
  return y;
}
d = c(3) + c(5);
console.log('x is', d);


console.log('---------------')

function op(a,b) {
  c = a+b;
  console.log('c is', c);
  return c;
}

x = op(2,3) + op(3,5);
console.log('x is', x);


console.log('---------------')

function op(a,b) {
  c = a+b;
  console.log('c is', c);
  return c;
}

x2 = op(2,3) + op(3,op(2,1)) + op(op(2,1), op(2,3));
console.log('x is', x2);
// function a3(n){
//   console.log('n is', n);
//    return n+15;
//  }
//  x2 = a3(3);
//  console.log('x is', x2);

// console.log('-------------------')

// function multiply(x,y){
//     console.log(x);
//     console.log(y);
// }
// const b = multiply(2,3);
// console.log(b);


// console.log('-------------------')

// function multiply2(x,y){
//   return x*y;
// }
// const b2 = multiply2(2,3);
// console.log(b2);
// console.log(multiply2(5,2));