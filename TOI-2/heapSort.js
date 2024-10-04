function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  for (let i = n - 1; i >= 0; i--) {
    [arr[i], arr[0]] = [arr[0], arr[i]];
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i) {
  let largest = i;
  let left = i * 2 + 1;
  let right = i * 2 + 2;
  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }
  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

let arr = [4, 10, 3, 5, 1];
heapSort(arr);
console.log("Sorted array:", arr);
