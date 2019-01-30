a = 20;
console.log(a);
function hello(a) {
  a = 50;
  console.log(a);
  return a;
}
a = hello(a);
console.log(a);