class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue() {
    const newNode = new Node(value);
    if (!this.first) this.first = newNode;
    else this.last.next = newNode;
    this.last = newNode;
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const temp = this.first;
    this.first = temp.next;
    this.length--;
    if (!this.length) this.tail = null;
    return temp.value;
  }
}
