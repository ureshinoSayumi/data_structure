// worst case O(n²)
// best case O(n)
// Average case O(n²)
function InsertionSort(arr) {
  for (let j=1; j<=arr.length - 1; j++) {
    let key = arr[j]
    let i = j-1
    while ( (i >= 0) && (arr[i] > key) ) {
      arr[i + 1] = arr[i]
      i -= 1
    }
    arr[i+1] = key
  }
  return arr
}
let ay = [14, -4, 17, 6, 22, 1, -5]
console.log(InsertionSort(ay))