const arrayGenerator = function(length){
  let newArray = []
  for(let i = length; i >= 1; i--) {
    newArray.push(i)
  }
  return newArray
}

let arr = arrayGenerator(50_000)


function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > numberToInsert){
      arr[j+1] = arr[j]
      j = j - 1
    }
    arr[j+1] = numberToInsert
  }
  return arr
} //This is O(n ^ 2)

console.log(insertionSort(arr));