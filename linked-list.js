class ListNode {
  constructor(data = null) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  append(data) {
    this.getTail().next = new ListNode(data)
  }

  prepend(data) {
    const lastHead = this.head
    this.head = new ListNode(data)
    this.head.next = lastHead
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  getHead() {
    return this.head
  }

  getTail() {
    let lastNode = this.head
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next
      }
    }
    return lastNode
  }

  at(index) {
    let count = 0
    let node = this.head
    while (node) {
      if (index === count) return node
      node = node.next
      count++
    }
  }

  pop() {
    let count = 1
    let secondLast = this.head
    while (count < this.size() - 1) {
      secondLast = secondLast.next
      count++
    }
    secondLast.next = null
  }

  find(value) {
    let node = this.head
    while (node) {
      if (node.data === value) return node
      node = node.next
    }
    return null
  }

  toString() {
    let node = this.head
    while (node) {
      console.log(node.data)
      node = node.next
    }
    if (!node) console.log("null")
  }

  insertAt(value, index) {
    let oldNode = this.at(index)
    let newNode = new ListNode(value)
    newNode.next = oldNode
    this.at(index - 1).next = newNode
  }

  removeAt(index) {
    this.at(index - 1).next = this.at(index + 1)
  }
}

let node1 = new ListNode(2)
let node2 = new ListNode(3)
node1.next = node2

let list = new LinkedList(node1)
list.prepend(1)
list.append(4)
list.insertAt(2.5, 2)
list.removeAt(2)
list.toString()
