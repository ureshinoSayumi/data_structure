

// 傳入一複雜陣列，將之整理成正常陣列
let arrs = [[[["a", [["b", ["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]];
function collector(arr1) {
  let result = [];
  helper(arr1);
  return result;

  // 判斷是否為陣列，若否就直存入 result，是就遞迴在一次進行判斷
  function helper(arr2) {
    for (let i = 0; i < arr2.length; i++) {
      if (Array.isArray(arr2[i])) {
        helper(arr2[i]);
      } else {
        result.push(arr2[i]);
      }
    }
  }
}

console.log(collector(arrs));
