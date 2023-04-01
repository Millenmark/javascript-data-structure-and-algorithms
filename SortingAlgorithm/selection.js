const arrayGenerator = function(length){
  let newArray = []
  for(let i = length; i >= 1; i--) {
    newArray.push(i)
  }
  return newArray
}

let arr = arrayGenerator(50_000)

function selectionSort(arr) {
  let length = arr.length - 1
  let minIndex

  for (let i = 0; i < length; i++){
    minIndex = i
    let minValue = arr[minIndex]
    for (let j = i; j < length; j++){
      if(minValue > arr[j + 1]){
        minValue = arr[j + 1]
        minIndex = j + 1
      }
    }

    if (i != minIndex){
      let temp = arr[i]
      arr[i] = arr[minIndex]
      arr[minIndex] = temp
    }
  }

  return arr
}

console.log(selectionSort(arr));