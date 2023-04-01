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
console.log(sortedArr);

