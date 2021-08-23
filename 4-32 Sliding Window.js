
// 輸入一陣列、n
// 該陣列內 n為一個window ，最後回傳最大的
// ex: ([2, 7, 3, 0, 6], 2)  10
//  [2,7] [7,3] [3,0] [0,6]

// ex: ([2, 7, 3, 0, 6], 2)  12
//  [2,7,3] [3,0,6]
function maxSun(arr, size) {
  let max_value = -Infinity // 無限小
  if (size > arr.length) {
    return null
  }
  for (let i=0; i<=arr.length - size; i++) {
    let attempt = 0
    for (let j=i; j<i+size; j++) {
      attempt += arr[j]
    }
    if (attempt > max_value) {
      max_value = attempt
    }
    
  }
  console.log(max_value)
}

// maxSun([2, 7, 3, 0, 6], 3)


// 練習 取最小的window
function minSun(arr, size) {
  let min_value = Infinity // 無限大
  if (size > arr.length) {
    return null
  }
  for (let i=0; i<=arr.length - size; i++) {
    let attempt = 0
    for (let j=i; j<i+size; j++) {
      attempt += arr[j]
    }
    if (attempt < min_value) {
      min_value = attempt
    }
    
  }
  console.log(min_value)
}
// minSun([2, 7, 3, 0, 6], 2)


// 優化解
// 原有做法必須把每個window都加上
// 2+7+3  7+3+0
// 但每次不同的只有頭跟尾

function maxSun2(arr, size) {
  if (size > arr.length) {
    return null
  }
  // 取第一個window總合
  let max_value = 0 
  for (let i=0; i<size; i++) {
    max_value += arr[i]
  }
  // 使用第一個window，減掉頭加上尾
  let temValue = max_value;
  for (let j=size; j<arr.length; j++) {
    temValue = temValue - arr[j - size] + arr[j]
    if (temValue > max_value) {
      max_value = temValue
    }
  }
  console.log(max_value)
}
maxSun2([2, 7, 3, 0, 6], 2)