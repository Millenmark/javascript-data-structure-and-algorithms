const arrayGenerator = function(length){
  let newArray = []
  for(let i = length; i >= 1; i--) {
    newArray.push(i)
  }
  return newArray
}

let arr = arrayGenerator(50_000)


//Bubble sort using nested loops
function bubbleSortNestedLoop(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSortNestedLoop(arr)); //This is the efficient way to use if you will use bubble sort

//Bubble sort using Do While Loop 
function bubbleSortDoWhile(arr){
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = temp
        swapped = true
      }
    }
  } while (swapped)

  return arr
}

console.log(bubbleSortDoWhile(arr));

