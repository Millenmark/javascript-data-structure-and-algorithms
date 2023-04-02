//This sorting algorithm has a BigO of O(n log n)

const arrayGenerator = function(length){
  let newArray = []
  for(let i = length; i >= 1; i--) {
    newArray.push(i)
  }
  return newArray
}

let arr = arrayGenerator(50_000_000)


//The merge sort algorithm
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  
  return merge(
    mergeSort(left),
    mergeSort(right)
  );
}

function merge(left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;
  
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}

console.log(mergeSort(arr));