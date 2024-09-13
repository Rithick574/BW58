class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
let count = 0;

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertRec(this.root, newNode);
    }
  }

  _insertRec(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertRec(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertRec(node.right, newNode);
      }
    }
  }

  search(value) {
    return this._searchRec(this.root, value);
  }

  _searchRec(node, value) {
    if (node === null) {
      return false;
    }
    if (node.value === value) {
      return true;
    }
    if (value < node.value) {
      return this._searchRec(node.left, value);
    } else {
      return this._searchRec(node.right, value);
    }
  }

  inorderTraversal() {
    const result = [];
    this._inorderRec(this.root, result);
    return result;
  }

  _inorderRec(node, result) {
    if (node !== null) {
      this._inorderRec(node.left, result);
      result.push(node.value);
      this._inorderRec(node.right, result);
    }
  }

  findLeafs() {
    if (this.root === null) {
      return 0;
    } else {
      this.findAllLeafs(this.root);
    }
  };

  findAllLeafs(node) {
    if (!node.left && !node.right) {
      count++;
    } else{
       this.findAllLeafs(node.left);
       this.findAllLeafs(node.right);
    }
    return count;
  };
}

// Example usage:
const bst = new BST();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
// console.log("Inorder Traversal:", bst.inorderTraversal());
// console.log("Search for 7:", bst.search(7));
// console.log("Search for 8:", bst.search(8));

console.log(bst.findLeafs());
