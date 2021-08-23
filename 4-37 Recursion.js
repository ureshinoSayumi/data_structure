
// 遞迴 傳入一數值n，n = (n-1)+15
// 10 25 40 55 70 85
// n = (n-1 + n-2) 0 1 1 2 3 5 8 13
function Recursion(n) {
  if (n <= 1) {
    return 10
  } else {
    return Recursion(n-1) + 15
  }
}
// 費式數列
function fs(n) {
  if (n == 0) {
    return 0
  } else if (n == 1) {
    return 1
  } else {
    return fs(n-1) + fs(n-2)
  }
}
console.log(fs(50))
