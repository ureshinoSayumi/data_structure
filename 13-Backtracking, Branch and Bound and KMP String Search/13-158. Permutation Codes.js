// 回朔法解排列組合
let x = ['A', 'B', 'C']
// 可能的排列組合有 3 * 2 * 1 種
// 此方法缺點，在於每增加一個值就要多寫一層迴圈，無法對應大多情況
// 詳細: 13-159. Permutation in General

// 第一版
function perm(arr) {
  for (let i=0; i<arr.length; i++) {
		for (let j=0; j<arr.length; j++) {
			for (let k=0; k<arr.length; k++) {
				if (i==k || j==k || i==j) { // 過濾重複出現的 
					continue
				}
				console.log(arr[i] + " " + arr[j] + " " + arr[k])
			}
		}
	}  
}

// 第二版，使用回朔法優化，時間複雜度會降低一些些
function perm2(arr) {
  for (let i=0; i<arr.length; i++) {
		for (let j=0; j<arr.length; j++) {
			if (i == j) {
				continue
			}
			for (let k=0; k<arr.length; k++) {
				if (i == k || j == k ) {
					continue
				}
				console.log(arr[i] + " " + arr[j] + " " + arr[k])
			}
		}
	}  
}
perm2(x)