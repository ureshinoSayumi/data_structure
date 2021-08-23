// 給一個陣列一個n，取出該陣列中，多少個值相加後才會大於n，回傳最短的路徑
// [8,1,6,15,3,16,5,7,14,30,12], 60
// step1. [8,1,6,15,3,16,5,7] length=8 sum=61
// step2. [1,6,15,3,16,5,7,14] length=8 sum=67
// step3. [6,15,3,16,5,7,14] length=7 sum=66
// step... [7,14,30,12] length=4 sum=63
// 使用sliding window 跟 Pointer
function minSubArray(arr, sum) {
  let start = 0
  let end = 0
  let total = 0
  let minLength = Infinity
  while (start < arr.length) {
    // 求出第一組 total == sum的windoe
    if (total < sum && end < arr.length) {
      total += arr[end]
      end++
    } else if (total >= sum) {
      // 求出後開始尋找最短的路徑，減掉頭
      let current = end - start
      if (minLength > current) {
        minLength = current
      } 
      total -= arr[start]
      start++
    } else if (end >= arr.length) {
      break
    }

  }
  if (minLength == Infinity) {
    console.log('Cannot find')
    return
  }
  console.log(minLength)
}
minSubArray([8,1,6,15,3,16,5,7,14,30,12], 70)