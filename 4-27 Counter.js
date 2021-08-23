// 計算兩字串字母是否一樣(允許排序不同)
function coe (str1, str2) {
  let arr1 = str1.split('')
  let arr2 = str2.split('')

  if (arr1.length !== arr2.length) {
    return false
  }
  let counter1 = {}
  let counter2 = {}

  for (let i=0; i<arr1.length; i++) {
    if (counter1[arr1[i]]) {
      counter1[arr1[i]]++
    } else {
      counter1[arr1[i]] = 1
    }
  }
  for (let i=0; i<arr2.length; i++) {
    if (counter2[arr1[i]]) {
      counter2[arr1[i]]++
    } else {
      counter2[arr1[i]] = 1
    }
  }
  for (let i in counter1) {
    if (!counter2[i]) {
      return false;
    }
    if (counter2[i] !== counter1[i]) {
      return false
    }
  }
  console.log(counter1)
  console.log(counter2)
  return true
}

console.log(coe("aabb", "abab"))
