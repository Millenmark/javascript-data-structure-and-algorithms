function heapSort(array) {
  // Build max heap
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--) {
    heapify(array, array.length, i);
  }

  // Heap sort
  for (let i = array.length - 1; i > 0; i--) {
    // Swap root with last element
    let temp = array[0];
    array[0] = array[i];
    array[i] = temp;

    // Heapify root element
    heapify(array, i, 0);
  }

  return array;
}

function heapify(array, n, i) {
  let largest = i; // Initialize largest as root
  let left = 2 * i + 1; // Left child
  let right = 2 * i + 2; // Right child

  // If left child is larger than root
  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  // If right child is larger than largest so far
  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  // If largest is not root
  if (largest !== i) {
    // Swap root with largest element
    let temp = array[i];
    array[i] = array[largest];
    array[largest] = temp;

    // Recursively heapify the affected sub-tree
    heapify(array, n, largest);
  }
}
