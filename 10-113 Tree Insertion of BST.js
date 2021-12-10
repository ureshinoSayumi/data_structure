class Node {
  constructor(key) {
    this.key = key;
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null
    this.path = ''
    this.queue = []
  }
  terrInsert(newNode) {
    let y = null
    let x = this.root
    while (x !== null) {
      y = x
      if (newNode.key < x.key) {
        x = x.left
      } else {
        x = x.right
      }
    }
    if (y == null) {
      this.root = newNode
    } else if (newNode.key < y.key) {
      y.left = newNode
    } else {
      y.right = newNode;
    }
  }
  // 遞迴
  searchRecursively(x, key) {
    if (x == null || key == x.key) {
      return x;
    } else if (key < x.key) {
      return this.searchRecursively(x.left, key)
    } else {
      return this.searchRecursively(x.right, key)
    } 
  }
  // 迴圈
  seachIteratively(x, key) {
    while (x !== null & key !== x.key) {
      if (key < x.key) {
        x = x.left
      } else {
        x = x.right
      }
    }
    if (x == null) {
      console.log('not found')
    } else {
      console.log('found')
    }
    return x
  }
  preOrder(n) {
    if (n != null) {
      this.path += n.key + ' '
      this.preOrder(n.left)
      this.preOrder(n.right)
    }
  }
  inOrder(n) {
    if (n != null) {
      this.inOrder(n.left)
      this.path += n.key + ' '
      this.inOrder(n.right)
    }
  }
  postOrder(n) {
    if (n != null) {
      this.postOrder(n.left)
      this.postOrder(n.right)
      this.path += n.key + ' '
    }
  }
  bftt(n) {
    if (n != null) {
      this.queue.push(n)
      for (let i=0; i<this.queue.length; i++) {
        let currentNode = this.queue[i]
        if (currentNode != null) {
          if (currentNode.left != null) {
            this.queue.push(currentNode.left)
          }
          if (currentNode.right != null) {
            this.queue.push(currentNode.right)
          }
        }
      }
    }
  }
}
let bst = new BinarySearchTree()
bst.terrInsert(new Node(15))
bst.terrInsert(new Node(6))
bst.terrInsert(new Node(5))
bst.terrInsert(new Node(1))
bst.terrInsert(new Node(13))
bst.terrInsert(new Node(-7))
bst.terrInsert(new Node(3))

// bst.preOrder(bst.root)
// bst.bftt(bst.root)
let result = bst.seachIteratively(bst.root, 5)
console.log(result)