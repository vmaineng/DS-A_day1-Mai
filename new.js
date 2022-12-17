
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

//push and pop for SLL class
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //create a new node to pass in the new val
    let newNode = newNode(val);

    //edge case - if linked list is empty, then assign head and tail to new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    //update length
    this.length++;

    //return the entire linked list back
    return this;
  }

  pop() {
    if (!this.head) return;

    let current = this.head;
    let newTail = this.tail;

    //traverse through linked list
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;

    //set newTail to point to null
    this.tail.next = null;

    //modify length
    this.length--;

    //if last value is removed and linked list is empty
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
}

// const newNode = new Node(4);
// console.log(newNode);

const newLinkedList = new SinglyLinkedList();
newLinkedList.pop()

console.log(newLinkedList)