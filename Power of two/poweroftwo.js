function isPowerOfTwo(n) {
  if (n < 1) return false

  while(n > 1) {
    if ( n % 2 !== 0) return false
    n /= 2
  }

  return true
} //this is a Big-O of O(logn)

console.log(isPowerOfTwo(16));


function isPowerOfTwoBitWise(n) {
  if ( n < 1 ) return false
  return (n & (n - 1)) === 0
} //This is a Big-O = O(1) constant

console.log(isPowerOfTwoBitWise(16));