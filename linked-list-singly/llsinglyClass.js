class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null;
    this.tail = null;
    this.numberOfListItems = 0;
  }
  get listLength() { return this.numberOfListItems }

  /**
   * We default to adding to the tail in this implementation since we track our tail
   * @param {*} value - The value of a new node
   */
  addToTail(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfListItems += 1;
  }

  search(value) {
    let current = this.head;
    while (current) {
      if (current.value === value ) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  remove(value) {
    let currentNode = this.head;
    let nextNode = this.head.next;

    if (value === currentNode.value) {
      this.head = nextNode;
      this.numberOfListItems -= 1;
      return;
    }

    while (nextNode) {
      if (nextNode.value === value) {
        if (nextNode === this.tail) {
          this.tail = currentNode;
        } else {
          currentNode.next = nextNode.next;
        }
        this.numberOfListItems -= 1;
        return;
      }
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
  }

  insertAfter(value, targetNodeValue) {
    const node = new Node(value);
    let currentNode = this.head;
    let nextNode = this.head.next;

    while (nextNode) {
      if (currentNode.value === targetNodeValue) {
        // if (nextNode) {
          node.next = currentNode.next;
          currentNode.next = node;
        // } else {
        //   currentNode.next = node;
        //   this.tail = node;
        // }
        this.numberOfListItems += 1;
        return;
      }
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }

    if (currentNode.value === targetNodeValue && currentNode === this.tail) {
      currentNode.next = node;
      this.tail = node;
      this.numberOfListItems += 1;
    }
  }

  /**
   * Traverses through each node in the linked list and runs a function on them
   * @param {*} fn - A function to apply to each node in the linked list
   */
  traverse(fn) {
    let current = this.head;
    if (fn) {
      while (current) {
      fn(current)
      current = current.next;
      }
    }
  }

  /**
   * Prints each node's value as a single string
   */
  print(){
    let string = '';
    let current = this.head
    while (current) {
      string += current.value + ' ';
      current = current.next
    }
    return string.trim();
  }
}

function addOne (node) {
  node.value += 1;
}

let singlyLL = new SinglyLinkedList();
singlyLL.addToTail(1);
singlyLL.addToTail(2);
console.log(singlyLL.listLength); // 2
console.log(singlyLL.print()) // 1 2
singlyLL.insertAfter(3, 2);
console.log(singlyLL.print()) // 1 2 3
singlyLL.remove(2)
console.log(singlyLL.print()) // 1 3
singlyLL.addToTail(4);
singlyLL.insertAfter(8, 2); // no effect
singlyLL.traverse(addOne);
console.log(singlyLL.print()) // 2 4 5
singlyLL.addToTail(6);
console.log(singlyLL.search(6)); // true
console.log(singlyLL.print()); // 2 4 6