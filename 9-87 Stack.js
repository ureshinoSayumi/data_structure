// Stack只能從尾進入從尾出來
// 沿用linklist 去除多餘方法

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
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
let myStack = new Stack();
myStack.push('1')
myStack.push('2')
myStack.push('3')
myStack.push('4')
myStack.push('5')
myStack.pop()


myStack.printAll()
console.log('length' + myStack.length)