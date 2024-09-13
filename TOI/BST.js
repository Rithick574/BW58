class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      this.insertNode(this.root, value);
    }
  }
  insertNode(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this.insertNode(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.insertNode(node.right, value);
      }
    }
  }
  display() {
    this.inOrderTraversal(this.root);
  }
  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      if (this.isPrimary(node.value)) {
        console.log(node.value);
      }
      this.inOrderTraversal(node.right);
    }
  }
  isPrimary(value) {
    if(value <=1) return false;
    if(value === 2) return true;
    if(value %2 ==0) return false;
    for(let i=3;i<=Math.sqrt(value);i++){
      if(value %i ==0) return false
    }
    return true
  }
  height(){
    return this.calculateHeight(this.root)
  }
  calculateHeight(node){
    if(node === null){
      return -1
    }
    let leftHeight = this.calculateHeight(node.left);
    let rightHeight = this.calculateHeight(node.right);
    return Math.max(leftHeight,rightHeight)+1
  }
  levelOrder(){
    if(this.root === null){
      console.log("tree is empty")
      return;
    };
    let queue = [this.root];
    while(queue.length > 0){
      let curr = queue.shift();
      console.log(curr.value);
      if(curr.left){
        queue.push(curr.left)
      }
      if(curr.right){
        queue.push(curr.right)
      }
    }
  }
}

const tree = new BST();
tree.insert(8);
tree.insert(2);
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(10);
tree.insert(1);
tree.insert(7);
tree.insert(3);
tree.insert(5);
tree.display();
console.log(tree.height());
