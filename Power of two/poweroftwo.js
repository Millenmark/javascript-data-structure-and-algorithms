function isPowerOfTwo(n) {
  if (n < 1) return false

  while(n > 1) {
    if ( n % 2 !== 0) return false
    n /= 2
  }

  return true
} //this is a Big-O of O(logn)

console.log(isPowerOfTwo(16));