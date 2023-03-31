function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i
  }
  return -1 + ' Not in the array'
} //This is Big-O = O(n)

console.log(linearSearch([1, 2, 8, 6], 3))