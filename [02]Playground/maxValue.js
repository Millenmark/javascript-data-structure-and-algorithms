function maxValue(arr) {
  for (let i = 0; i < arr.length - 1; i++){
    if (arr[i] > arr[i + 1]) {
      let temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
      console.log(arr);
    }
  }
  let max = arr[arr.length - 1]
  return `The max value is: ${max}`
}//I use bubble sort in this 

console.log(maxValue([60, 50, 95, 80, 70]))