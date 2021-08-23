// 輸入1.陣列 2.值
// 取該陣列中所有相加後平均為2.的對數
// 範例 in: ([0,1,2,3,4,5,6,7,8,9,10], 4) 
//      ou: [ [ 0, 8 ], [ 1, 7 ], [ 2, 6 ], [ 3, 5 ] ] 

// 1. 暴力解 O(n^2)
function averageFor (arr, avg) {
  let result = []
  for (let i=0; i<arr.length-1; i++) {
    for (let j=i+1; j<arr.length; j++) {
      // console.log(arr[i], arr[j])
      if ( (arr[i] + arr[j]) / 2 == avg ) {
        result.push([arr[i], arr[j]])
      }
    }
  }
  console.log(result)
}

// 2. Pointer解 O(n)
// 用於已被排序的陣列，先取陣列中最左以及最右的算出平均，如果大於就往內縮一隔繼續尋找
function averagePair (arr, avg) {
  let left = 0
  let right = arr.length - 1
  let result = []
  while (right > left) {
    let temp_avg = ( arr[right] + arr[left] ) / 2
    if (temp_avg > avg) {
      right--
    } else if (temp_avg < avg ) {
      left++
    } else if (temp_avg == avg) {
      result.push([arr[left], arr[right]])
      right--
      left++
    }
  }
  console.log(result)
}

// averagePair([0,1,2,3,4,5,6,7,8,9,10], 4)


// 練習題1. Palindrome
// 輸入一字串，從前往後讀，跟從後往前讀都一樣
// ex: ('t a c o o c a t') true   
// ex: ('asdfasfewa') false
function Palindrome (str) {
  let left = 0
  let right = str.length - 1
  while (right >= left) {
    console.log(str[left], str[right])
    if (str[left] == str[right]) {
      right--
      left++
    } else {
      console.log(false)
      return false
    } 
  }

  console.log(true)
  return true
}
// Palindrome('amanaplanacanalpanama')

// 練習題2. Subsequence Problem
// 輸入兩個字串，在順序不變的情況下，刪除部分字元後，判斷兩個字串是否相等
// ex: ('hello', 'hello Dear') true
// ex: ('book', 'brooklyn') true
// ex: ('abc', 'bac') false

function Subsequence(str1, str2) {
  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < str2.length) {
    if (str1[pointer1] == str2[pointer2]) {
      pointer1++
    } 
    if (pointer1 >= str1.length) {
      console.log(true)
      return true
    }
    pointer2++
  }
  console.log(false)
}
Subsequence('book', 'brooklyn')