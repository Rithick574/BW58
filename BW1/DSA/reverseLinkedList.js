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
  append(data) {
    const newNode = new Node(data);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
  }
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  reverse() {
    let current = this.head;
    let next = null;
    let prev = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = this.tail;
    this.tail = prev;
  }

  Palindrome() {
    function checkPalindrome(currentNode) {
      if (!currentNode) return { isPalindrome: true, node: this.head };

      const result = checkPalindrome.call(this, currentNode.next);

      if (!result.isPalindrome || result.node.value !== currentNode.value)
        return { isPalindrome: false, node: result.node };

      return { isPalindrome: true, node: result.node.next };
    }
    return checkPalindrome.call(this, this.head).isPalindrome;
  }
}

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);
list.append(4);
// list.append(4);
// list.append(3);
// list.append(2);
// list.append(1);
console.log("List after appending elements:");
list.reverse(3);
list.print();
console.log("Is palindrome:", list.Palindrome());
