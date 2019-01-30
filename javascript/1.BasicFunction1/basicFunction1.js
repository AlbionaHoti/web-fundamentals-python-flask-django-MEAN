function a(){
  return 15;
}

console.log(a());

console.log('-------');

function b(){
  return 4;
}

console.log(b() + b());

console.log('-------');

function c(b) {
  return b;
}
console.log(c(4) + c(2));

console.log('-------');

function d(b) {
  console.log(b);
  return b*3;
}

console.log(d(3));

console.log('-------');

function e(b) {
  return b*4;
  console.log(b);
}

console.log(e(10));

console.log('-------');


function f(b) {
  if(b<10) {
    return 4;
  } else {
    return 2;
  }
  console.log(b);
}
console.log(f(15));

console.log('-------');

function g(a,b) {
  return a*b;
}
console.log(10,30);
console.log(g(10,4));

console.log('-------');

function h(a) {
  for(var i=0; i<10; i++) {
    console.log(i);
  }
  return i;
}

console.log(3);
console.log(4);

console.log('-------');

function i() {
  for(var i=0; i<10; i++) {
    i = i + 2;
    console.log(i);
  }
}
i();

console.log('-------');
function j(a,b) {
  for(var i=a; i<b; i++){
    console.log(i);
  }
  return a*b;
}
j(0,10);
console.log(j(0,10));

console.log('-------');

function k() {
  for(var i=0; i<10; i++) {
    for(var j=0; j<10; j++) {
      console.log(j + '---- j ');
    }
    console.log(i + '----i');
  }
}

k();


console.log('-------');

function ab(){
  for(var i=0; i<10; i++){
      for(var j=0; j<10; j++){
          console.log(i,j);
      }
      console.log(j,i);
  }
}

ab();


console.log('-------');
var z = 10;
function ax() {
    var z = 15;
    console.log(z);
}
ax();
console.log(z);


console.log('-------');

var z = 10;
function s() {
  var z = 15;
  console.log(z);
  return z;
}
z = s();