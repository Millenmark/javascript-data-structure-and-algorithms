function recursiveFibonacci(n) {
  if (n < 2) return n
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)
}
// console.log(recursiveFibonacci(1000)) //This will take time
//O(n) = iterative
//O(2^n) = recursive

