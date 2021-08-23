function fun1 (n){
  let sum = 0;
  for (let i=1; i<=n; i++) {
    sum += i;
  }
  return sum
}

function fun2 (n){
  return ((1 + n) * n) / 2;
}

let startTime = new Date().getTime();

console.log(fun1(10000000))
let endTime = new Date().getTime();
console.log('testName: ' + (endTime - startTime) + 'ms');

console.log(fun2(10))

