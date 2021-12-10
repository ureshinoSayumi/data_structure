
// worse case O(n logn)
// best case O(n logn)
// average case O(n logn)
function merge(arr1, arr2) {
  let result = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j])
      j++
    } else {
      result.push(arr1[i])
      i++
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    result.push(arr2[j])
    j++
  }
  console.log('sort', result)
  return result
}

function mergeSort(arr) {
  if (arr.length === 1) return arr
  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle, arr.length)
  // console.log(middle, left, right)
  console.log('merge', left, right)
  return merge(mergeSort(left), mergeSort(right))
}
// console.log(merge(1,2))
console.log(mergeSort([10, 5, -2, 4 , 3 , 2 , 1, -6]))
