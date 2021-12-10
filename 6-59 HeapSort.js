
// worse case O(n logn)
// best case O(n logn)
// average case O(n logn)
let heapSize
let arr = [15, 3, 17, 16, 18, 20, 2, 1, 666]
heapSort()
console.log(arr)

function buildMaxHeap() {
  heapSize = arr.length - 1 
  for (let i=Math.floor(heapSize/2); i>=0; i--) {
    maxHeapify(i)
  }
}
function maxHeapify(i) {
  let largest
  let l = 2 * i + 1
  let r = 2 * i + 2
  if (l <= heapSize && arr[l] > arr[i]) {
    largest = l
  } else {
    largest = i
  }
  if (r <= heapSize && arr[r] > arr[largest]) {
    largest = r
  }
  if (largest != i) {
    let temp = arr[i]
    arr[i] = arr[largest]
    arr[largest] = temp
    maxHeapify(largest)
  }
}
function heapSort() {
  buildMaxHeap()
  for (let i = arr.length - 1; i >= 0; i--) {
    let temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp
    heapSize -= 1
    maxHeapify(0)
  }
  return arr
}
