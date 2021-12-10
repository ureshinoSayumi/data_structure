// 氣泡排序
// worst case O(n²)
function bubbleSort(arr) {
  for (let i = 0; i <= arr.length-2; i++) {
    for (let j = arr.length-1; j >= i+1; j--) {
      if (arr[j] < arr[j-1]) {
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
      }
    }
  }
  console.log(arr)
}
bubbleSort([7,2,6,8,3,9,10,1])

// 優化 讓bast case 複雜度達到 O(n)
function bubbleSort2(arr) {
  for (let i = 0; i <= arr.length-2; i++) {
    let swapping = false
    for (let j = arr.length-1; j >= i+1; j--) {
      if (arr[j] < arr[j-1]) {
        let temp = arr[j]
        arr[j] = arr[j-1]
        arr[j-1] = temp
        swapping = true
      }
    }
    if (swapping == false) {
      break
    }
  }
  console.log(arr)
}