class Node {
	constructor(value, priority) {
		// node 有兩個參數 1.值 2.要比較的優先事項
		this.value = value
		this.priority = priority
	}
}
class PriorityQueue {
	constructor() {
		this.values = []
	}
	// 
	enqueue(value, priority) {
		let newNode = new Node(value, priority)
		// check if the priority queue is empty
		if (this.values.length === 0) {
			this.values.push(newNode)
			return true
		}
		this.values.push(newNode)
		let newIndex = this.values.length - 1
		let parenIndex = Math.floor((newIndex - 1) / 2) // 找出父節點的index
		while (
			parenIndex >= 0 && 
			this.values[newIndex].priority > this.values[parenIndex].priority
		) {
			// 交換父節點跟子節點
			let result = this.values[parenIndex]
			this.values[parenIndex] = this.values[newIndex]
			this.values[newIndex] = result
			// 更新 index
			newIndex = parenIndex;
			parenIndex = Math.floor((newIndex - 1) / 2)
		}
	}
	dequeue() {
		if (this.values.length === 0) {
			return false
		}
		if (this.values.length === 1) {
			let removeNode = this.values.pop()
			return removeNode
		}
		// 互換第一個跟最後一個nodes
		let temp = this.values.pop()
		this.values.push(this.values[0])
		this.values[0] = temp
		let removeNode = this.values.pop()
		this.maxHeapify(0);
		return removeNode
	}
	maxHeapify(i) {
		let largest
		let l = i * 2 + 1
		let r = i *2 + 2
		if (l <= this.values.length - 1 && this.values[i].priority > this.values[i].priority) {
			largest = l
		} else {
			largest = i
		}
		if (r <= this.values.length -1 && this.values[r].priority > this.values[largest].priority) {
			largest = r
		}
		if (largest != i) {
			let temp = this.values[i]
			this.values[i] = this.values[largest]
			this.values[largest] = temp;	
			this.maxHeapify(largest)
		}
	}
}
let pq = new PriorityQueue()
pq.enqueue("Eat Breakfast", 56)
pq.enqueue("Learn Java", 2)
pq.enqueue("Learn Python", 7)
pq.enqueue("Use Restroom", 10)// 會將最緊急的排到最前面，後面的不一定
while (pq.values.length >= 1) {
	console.log(pq.dequeue())
}