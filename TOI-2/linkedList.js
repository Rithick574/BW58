class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insert(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  removeTail() {
    if (this.head === null) {
      return;
    }
    let curr = this.head;
    while (curr.next.next) {
      curr = curr.next;
    }
    curr.next = null;
    this.tail = curr;
  }
  print() {
    let ar = [];
    let curr = this.head;
    while (curr) {
      console.log(curr.value);
      curr = curr.next;
    }
  }
  reverse() {
    if (this.head === null) {
      return;
    }
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  removeaNode(value) {
    if (this.head === null) {
      return;
    }
    let curr = this.head;
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    while (curr.next) {
      if (curr.next.value == value) {
        curr.next = curr.next.next;
        return;
      }
      curr = curr.next;
    }
  }

  palindromeorNot() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let prev = null;
    while (slow) {
      let next = slow.next;
      slow.next = prev;
      prev = slow;
      slow = next;
    }
    let secondHalf = prev;
    let firsthalf = this.head;
    while (secondHalf) {
      if (firsthalf.value != secondHalf.value) {
        return false;
      }
      firsthalf = firsthalf.next;
      secondHalf = secondHalf.next;
    }
    return true;
  }
  removeDuplicates(){
    if(this.head === null){
        return;
    };
    let curr = this.head;
    while(curr){
        let runner = curr;
        while(runner.next){
            if(runner.next.value === curr.value){
                runner.next = runner.next.next;
            }else{
                runner = runner.next
            }
        }
        curr = curr.next
    }
  }
  hasCycle(){
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next){
        slow = slow.next;
        fast= fast.next.next;
        if(slow === fast){
            return true
        }
    }
    return false
  }
}

const LL = new LinkedList();
LL.insert(1);
LL.insert(2);
LL.insert(3);
LL.insert(4);
// LL.head.next.next.next.next = LL.head.next
// LL.print();
// console.log("after deletion:");
// LL.removeTail();
// LL.print();
// console.log("after reverse:");
// LL.reverse();
// console.log(LL.palindromeorNot());
// LL.removeDuplicates()
// LL.print();
console.log("Does the linked list have a cycle?", LL.hasCycle());
