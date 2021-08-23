
// 傳入一字串，回傳最長的連續不重複字串有幾個
// ex (thisishowwedoit) // 6
// 使用sliding window 跟 Counter
function uniqueLetterSubstring(str){
  let start = 0
  let end = 0
  let counter = {}
  let maxLength = -Infinity
  while (end < str.length) {
    // 建立Counter
    console.log(counter)
    if (counter[str[end]]) { // 如果遇到重複的，就把初始點屬性歸零，並且初始點+1
      counter[str[start]]--
      start++
    } else { // 如果沒有重複的，就計算此字串多長
      counter[str[end]] = 1
      end++
      if ( (end - start) > maxLength) {
        maxLength = end - start
      }
    }
    
  }
  if (maxLength == -Infinity) {
    console.log('Cannot')
    return
  }
  console.log(maxLength)
}
uniqueLetterSubstring('thisishowwedoit')