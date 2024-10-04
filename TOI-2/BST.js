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
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
  delete(value) {
    if (this.root === null) {
      return;
    }
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this.deleteNode(node.left, value);
    } else if (value > node.value) {
      node.right = this.deleteNode(node.right, value);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      node.value = this.findMinValue(node.right);
      node.right = this.deleteNode(node.right, node.value);
    }
    return node;
  }
  findMinValue(node) {
    if (node.left === null) {
      return node.value;
    }
    return this.findMinValue(node.left);
  }
  findAllLeafs(node) {
    if (!node.left && !node.right) {
      count++;
    } else{
       this.findAllLeafs(node.left);
       this.findAllLeafs(node.right);
    }
    return count;
  };
  depth() {
    function getDepth(root) {
      if (root === null) return 0;
      let left = getDepth(root.left);
      let right = getDepth(root.right);
      return Math.max(left, right) + 1;
    }
    return getDepth(this.root);
  }
};

const tree = new BST();
tree.insert(4);
tree.insert(6);
tree.insert(9);
tree.insert(1);
tree.insert(8);

console.log("Tree before deletion:");
tree.display();

tree.delete(4);

console.log("Tree after deletion:");
tree.display();
