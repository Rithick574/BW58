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
    let node = new Node(value);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (root.value > node.value) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }
  display() {
    this.levelOrder();
  }
  inOrderTraversal(root) {
    if (root) {
      this.inOrderTraversal(root.left);
      console.log(root.value);
      this.inOrderTraversal(root.right);
    }
  }
  levelOrder() {
    if (this.root === null) {
      console.log("its empty");
      return;
    }
    let queue = [this.root];
    while (queue.length > 0) {
      let curr = queue.shift();
      console.log(curr.value);
      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }
  depth() {
    function depthOfTree(root) {
      if (root == null) {
        return 0;
      }
      let left = depthOfTree(root.left);
      let right = depthOfTree(root.right);
      return Math.max(left, right) + 1;
    }
    return depthOfTree(this.root);
  }
  findThridLargest() {
    let count = 0;
    let result = null;
    function reverseInorder(root) {
      if (root === null || count >= 3) return;

      reverseInorder(root.right);
      count++;
      if (count === 3) {
        result = root.value;
        return;
      }
      reverseInorder(root.left);
    }
    reverseInorder(this.root);
    return result;
  }
}

let bst = new BST();
bst.insert(6);
bst.insert(2);
bst.insert(9);
bst.insert(10);
bst.insert(4);
// console.log(bst.depth());
console.log(bst.findThridLargest());

