function summation(n) {
  let sum = 0
  for (let i = 1; i <= n; i++){
    document.write(`This is index: ${i}<br> `)
    sum += i
    document.write(`This is the sum after the index increment: ${sum} <br>`)
  }
  return sum
}//This is O(n)

function summation2(n) {
  return (n * (n + 1))/2
}//This is 0(1)

console.log(summation(5))
console.log(summation2(7));

function oddEven(n) {
  return n % 2 === 0 ? 'even' : 'odd'
}