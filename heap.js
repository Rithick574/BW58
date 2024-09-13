// const arr = [5, 8, 9, 7, 3, 1, 4];
// function hepify(arr, i, n) {
//   let left = i * 2 + 1;
//   let right = i * 2 + 2;
//   if (left < n && arr[i] > arr[n]) {
//     [arr[i], arr[left]] = [arr[left], arr[right]];
//   } else if (right < n && arr[i] > arr[n]) {
//     [arr[right], arr[i]] = [arr[i], arr[left]];
//   } else {
//     hepify(arr, i, n);
//   }
// }

// function heapSort(arr) {
//   let n = arr.length;
//   for (let i = Math.floor(n / 2); i > 0; i--) {
//     hepify(arr, i, n);
//   }
//   for (let i = 0; i < n; i++) {
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     hepify(arr, i, n);
//   }
// }

// heapSort(arr);

class Stack {
  constructor() {
    this.stack = [];
  }
  insert(num) {
    this.stack.push(num);
  }
  sort() {
    let result = [];
    while (this.stack.length > 0) {
      const a = this.stack.pop();
      result.push(a);
    }
    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < result.length - i - 1; j++) {
        if (result[j] > result[j + 1]) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }
    return result;
  }

}

const stack = new Stack();
stack.insert(5);
stack.insert(7);
stack.insert(3);
stack.insert(57);
console.log(stack.sort());
