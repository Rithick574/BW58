class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  arrayToLinkedList(arr) {
    if(array.length === 0){
        return null;
    };
    this.head = new Node(arr[0]);
    let current = this.head;
    for(let i=1;i<arr.length;i++){
        current.next = new Node(arr[i]);
        current = current.next;
    }
    return this.head;
  }

  addAtEnd(data){
    const newNode = new Node(data);
    if(this.head === null){
        this.head = newNode;
        return;
    }
    let current = this.head;
    while(current.next !== null){
        current = current.next;
    }
    current.next = newNode;
  }

  addAtBeginning(data){
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteNode(data){
    if(this.head === null){
        return;
    };
    if(this.head.data === data){
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    while(current.next !== null && current.next.data !== data){
        current = current.next;
    }
    if(current.next !== null){
        current.next = current.next.next;
    }
  }

  removeDuplicates(){
    let current = this.head;
  }

  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const array = [1, 2, 3, 4, 5];
const list = new LinkedList();
list.arrayToLinkedList(array);
list .printList()

list.addAtEnd(6);
console.log("After adding 6 at the end:");
list.printList();

list.addAtBeginning(0);
console.log("After adding 0 at the beginning:");
list.printList();

list.deleteNode(3);
console.log("After deleting node with value 6:");
list.printList();

list.removeDuplicates();
console.log("After removing duplicates:");
list.printList();


const words = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
const date =new Date();
const christmasDate = new Date("12/25/2024")
let result=christmasDate-date
console.log(Math.floor(result / (1000 * 60 * 60 * 24)))


