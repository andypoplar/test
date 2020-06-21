function fn(n) {
  if (n < 2) return n;
  return fn(n - 1) + fn(n - 2)
}

console.log(fn(9));