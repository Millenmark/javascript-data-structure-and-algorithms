function binarySearch(arr, target) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)
    if (target === arr[middleIndex]) return middleIndex
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1
    } else {
      leftIndex = middleIndex + 1
    }
  }

  return -1
}//This is Big-O = O(logn) because we reduce this by half

console.log(binarySearch([-5, 2, 5, 6, 10, 23], 6))