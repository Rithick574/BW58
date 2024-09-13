class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value) {
    if (this.isEmpty()) {
      return false;
    } else {
      return this.searchNode(this.root, value);
    }
  }

  searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    } else if (value < node.value) {
      return this.searchNode(node.left, value);
    } else {
      return this.searchNode(node.right, value);
    }
  }

  findKthLargest(k) {
    let count = 0;
    let result = null;

    const reverseInOrderTraversal = (node) => {
      if (node === null || count >= k) {
        return;
      }
      reverseInOrderTraversal(node.right);
      count++;
      if (count === k) {
        result = node.value;
        return;
      }
      reverseInOrderTraversal(node.left);
    };

    reverseInOrderTraversal(this.root);
    return result;
  }
  height() {
    return this.calculateHeight(this.root);
  }

  calculateHeight(node) {
    if (node === null) {
      return -1;
    }
    let leftHeight = this.calculateHeight(node.left);
    let rightHeight = this.calculateHeight(node.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  display() {
    console.log("Level Order:");
    this.LevelOrder();
    console.log("InOrder traversal:");
    this.inOrderTraversal(this.root);
    console.log("PreOrder traversal:");
    this.preOrderTraversal(this.root);
    console.log("PostOrder traversal:");
    this.postOrderTraversal(this.root);
    console.log("Height of the tree:");
    console.log(this.height());
    console.log("Third largest element:");
    console.log(this.findKthLargest(3));
  }

  LevelOrder() {
    if (this.isEmpty()) {
      console.log("Tree is empty");
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

  inOrderTraversal(node) {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  preOrderTraversal(node) {
    if (node) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  postOrderTraversal(node) {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }
}

const tree = new Bst();
tree.insert(3);
tree.insert(31);
tree.insert(33);
tree.insert(35);
tree.insert(37);
console.log(tree.isEmpty()); // false
console.log(tree.search(31)); // true
console.log(tree.search(100)); // false
tree.display(); // Displays various traversals and the third largest element
