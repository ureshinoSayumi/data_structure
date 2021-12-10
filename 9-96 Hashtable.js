// 使用key的方式來存值
// 使用一段算式將唯一值轉成特定index值，存入指定index
// 取值方式，一樣用算式將唯一值轉成特定index值，由此直接找到儲存位置

class HashTable {
  // m = hahstable size
  constructor(size) {
    this.size = size
    this.table = [];
    for (let i=0; i<this.size; i++) {
      this.table.push([]);
    }
  }
  // parse string to integer
  parse(str) {
    let result = 0
    for (let i=0; i<str.length; i++) {
      result += str.charCodeAt(i); // 將字串轉成UTF-16 代碼單元。
    }
    return result % this.size
  }
  // division method
  hash1(key) {
    return key % this.size
  }
  // muLtipLication method
  hash2(key) {
    let parsedKey = 0;
    if (typeof key !== "number") {
      parsedKey = this.parse(key)
    } else {
      parsedKey = key
    }
    let a = (Math.sqrt(5) - 1) / 2
    return Math.floor(this.size * ((parsedKey * a) % 1));
  }
  set(key, value) {
    let index = this.hash2(key)
    this.table[index].push({ key, value });
  }
  get(key) {
    let index = this.hash2(key)
    for (let i=0; i<this.table[index].length; i++) {
      if (this.table[index][i].key == key) {
        return this.table[index][i];
      }
    }
    return null
  }
  printAll() {
    console.log(this.table)
  }
}
let myhashtable = new HashTable(6);
myhashtable.set('white', '#FFFFFF')
myhashtable.set('magent', '#FF00FF')
myhashtable.set('red', '#FF0000')
// myhashtable.set(554, 'Kevin')
// myhashtable.printAll();
console.log(myhashtable.get('red'))

// myhashtable.parse('kdey')