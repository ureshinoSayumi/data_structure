// Singly Linked List
//   1.沒有index
//   2.每個值都需要多一個next連接，耗記憶體
//   3.要找特定沒有index值只能一個一個找
// Array
//   1.有inedx
//   2.插入跟刪除耗能(高時間複雜度)，因為每次刪除特定值，都必須重整index
//   3.要找特定值可直接指定index
//                  Array   LinkedList
// 找特定index值    O(1)    O(n)
// 插入跟刪除        O(n)    O(1)
// 從尾部插入刪除    O(1)    O(n)
// 從中間插入刪除     O(n)    O(n)

// // Doubly Linked List
// 1. 找特定沒有index值只需要singly的一半時間複雜度
// 2. 可以從前往後讀也可以從後往前
// 3. 比起singly多了一個往前的節點，所以更耗記憶體
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(value) {
    let newNode = new Node(value)
    if (this.head === null) {
      this.head = newNode
    } else {
      let currentNoda = this.head
      while (currentNoda.next !== null) {
        currentNoda = currentNoda.next
      }
      currentNoda.next = newNode
    }
    this.length++
  }
  // 刪除最後一個值
  pop() {
    if (!this.head) {
      return null
    } else if (this.length === 1) {
      let temp = this.head
      this.head = null
      this.length = 0
      return temp
    } else {
      let currentNoda = this.head
      for (let i=0; i<this.length-2; i++) {
        currentNoda = currentNoda.next
      }
      let temp = currentNoda.next
      currentNoda.next = null
      this.length--
      return temp
    }
  }
  // 刪除第一個值
  shift() {
    if (!this.head) {
      return null
    } else if (this.length === 1) {
      let temp = this.head
      this.head = null
      this.length = 0
      return temp
    } else {
      let temp = this.head
      this.head = this.head.next
      this.length--
      console.log(temp)
      return temp
    }
  }
  // 在第一筆插入
  unshift(value) {
    if (!this.head) {
      this.head = new Node(value)
    } else {
      let temp = this.head;
      let newNode = new Node(value)
      this.head = newNode
      this.head.next = temp
    }
    this.length++
    // return this.head
  }
  // 插入
  insertAt(index, value) {
    if (index > this.length || index < 0) {
      return null
    } else if (index === 0) {
      this.unshift(value)
      return
    } else if (index === this.length) {
      this.push(value)
      return
    }
    let currentNoda = this.head 
    let newNode = new Node(value)
    // 找到要插入的node的前一個
    for (let i=0; i<index-1; i++) {
      currentNoda = currentNoda.next
    }
    newNode.next = currentNoda.next
    currentNoda.next = newNode
    this.length++
    return

  }
  // 刪除指定index
  removeAt(index) {
    if (index > this.length || index < 0){
      return null
    } else if (index === 0) {
      let result = this.shift()
      return result
    } else if (index === this.length) {
      let result = this.pop()
      return result
    } else {
      let currentNoda = this.head 
      // 單向link list沒辦法往前走，所以停在要刪除的node的前一個
      for (let i=0; i<index-1; i++) {
        currentNoda = currentNoda.next
      }
      let temp = currentNoda.next
      currentNoda.next = currentNoda.next.next
      this.length--
      return temp
    }
  }
  get(index) {
    if (index >= this.length || index < 0) {
      return null
    } 
    let currentNoda = this.head
    for (let i=0; i<index; i++) {
      currentNoda = currentNoda.next
    }
    return currentNoda
  }
  printAll() {
    if (this.length === 0) {
      console.log('none')
      return
    }
    let currentNoda = this.head;
    while (currentNoda !== null) {
      console.log(currentNoda.value);
      currentNoda = currentNoda.next
    }
  }
}
let myLinkList = new LinkedList();
// myLinkList.shift()
myLinkList.push('1')
myLinkList.push('2')
myLinkList.push('3')
myLinkList.push('4')
myLinkList.push('5')

// console.log(myLinkList.removeAt(4))
// myLinkList.removeAt(3)
// myLinkList.unshift(4)
// myLinkList.get(4)
// myLinkList.shift()
// myLinkList.pop()


myLinkList.printAll()
console.log('length' + myLinkList.length)