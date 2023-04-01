function reverseSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

var arr = [5, 2, 8, 3, 1, 4];
var sortedArr = reverseSort(arr);
// console.log(sortedArr);

//Reversing a sorted array

function reverseSorted(arr){
  let length = arr.length
  let middle = Math.floor(length / 2)
  for ( let i = 0; i <= middle; i++){
    let temp = arr[i]
    arr[i] = arr[length - i - 1]
    arr[length - i - 1] = temp
  }
  return arr
}

console.log(reverseSorted([50, 60, 70, 80, 90]));