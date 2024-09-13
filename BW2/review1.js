function fetchData() {
  getUserData((userError, userData) => {
    if (userError) {
      console.error(userError);
    } else {
      getOrders(userData, (orderError, orderDetails) => {
        if (orderError) {
          console.error(orderError);
        } else {
          getDetails(orderDetails, (detailError, DetailData) => {
            if (detailError) {
              console.error(detailError);
            } else {
              console.log(DetailData);
            }
          });
        }
      });
    }
  });
}

fetchData();

function fetchData() {
  getUserData()
    .then((userData) => {
      getOrders(userData);
    })
    .then((orderDetails) => {
      getOrders(orderDetails);
    })
    .then((DetailData) => {
      console.log(DetailData);
    })
    .catch((error) => {
      console.log(error);
    });
}

const fetchData = async () => {
  try {
    const userData = await getUserData();
    const getOrders = await getOrders(userData);
    const getDetails = await getDetails(getOrders);
    console.log(getDetails[0].orderId);
  } catch (error) {
    console.log(error);
  }
};

const map = new Map()
const set = new Set()

const obj={
    name:"Rithick",
    greeting:function(){
        console.log(`my name is ${this.name}`)
    }
};

const obj2={
    name:"Arjun"
}

obj.greeting();

obj2.call.greeting(obj)
obj2.a.greeting(obj)
obj2.call.greeting(obj);

function heapify(arr, n, i) {
  let larget = i;
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  if (left < n && arr[left] > arr[larget]) {
    larget = left;
  }
  if (right < n && arr[right] > arr[larget]) {
    larget = right;
  }
  if (larget !== i) {
    [arr[i], arr[larget]] = [arr[larget], arr[i]];
    heapify(arr, n, larget);
  }
}

function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0);
  }
}

const arr = [9, 5, 2, 8, 7, 8, 3];
heapSort(arr);
console.log(arr);

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
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.addVertex(this.root, value);
    }
  }
  addVertex(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new Node(value);
      } else {
        this.addVertex(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(value);
      } else {
        this.addVertex(node.right, value);
      }
    }
  }
  depth() {
    function getDepth(root) {
      if (root === null) return 0;
      let left = getDepth(root.left);
      let right = getDepth(root.right);
      return Math.max(left, right) + 1;
    }
    return getDepth(this.root);
  }
}

const bst = new BST();
bst.insert(9);
bst.insert(3);
bst.insert(6);
bst.insert(7);
console.log(bst.depth());

