// 用遞迴解 LCS

function simpleLCS(str1, str2) {
  if (str1.length == 0 || str2.length == 0) {
    return 0
  } else {
		if (str1[str1.length - 1] == str2[str2.length - 1]) {
			return 1 + simpleLCS(str1.substring(0, str1.length - 1), str2.substring(0, str2.length - 1))
		} else {
			// Math.max 會回傳零或多個數字中的最大值。
			return Math.max(
				simpleLCS(str1.substring(0, str1.length - 1), str2),
				simpleLCS(str1, str2.substring(0, str2.length - 1))
			)
		}
  }
}

// console.log(simpleLCS('AGB', 'ACB'))
console.log(simpleLCS('ATAACGCGCTGCTCGGGT', 'TCAATCAGGATCCGCTGA'))