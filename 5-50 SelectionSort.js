// 選擇排序，不斷取最少得值，跟陣列最左邊交換
// worst case O(n²)
// best case O(n²)
// Average case O(n²)
function SelectionSort(arr) {
  // arr最後一個確定是最大，所以不須跑到最後一個
  for(let i=0; i<arr.length-1; i++) {
    let smail = i
    for (let j=i; j<arr.length; j++) {
      if (arr[smail] > arr[j]) {
        smail = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[smail]
    arr[smail] = temp    
  }
  return arr
}
let ay = [14, -4, 17, 6, 22, 1, -5]
console.log(SelectionSort(ay))