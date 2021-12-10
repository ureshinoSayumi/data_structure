

// worse case O(n²)
// best case O(n logn)
// average case O(n logn)

const { resolve } = require("url")

let arr = [15, 3, 17, 16, 18, 20, 2, 1, 666]
QuickSort(0, arr.length-1)
console.log(arr)

function Partition(p, r) {
  let x = arr[r]
  let i = p-1
  for (let j=p; j<=r-1; j++) {
    if (arr[j] <= x) {
      i += 1
      let temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  }
  let temp = arr[i+1];
  arr[i+1] = arr[r]
  arr[r] = temp
  return i+1
}


function QuickSort(p, r) {
  if (p < r) {
    let q = Partition(p, r)
    QuickSort(p, q-1)
    QuickSort(p+1, r)
  }
}