function cartesianProduct(setA, setB) {
  const product = [];
  for (let elemA of setA) {
    for (let elemB of setB) {
      product.push([elemA, elemB]);
    }
  }
  return product;
}

// example usage:
const set1 = new Set([1, 2, 3]);
const set2 = new Set(['a', 'b', 'c']);
const product = cartesianProduct(set1, set2);
console.log(product); // [[1,'a'], [1,'b'], [1,'c'], [2,'a'], [2,'b'], [2,'c'], [3,'a'], [3,'b'], [3,'c']]
