function foo(x) {
  if (x === null) {
    return 0;
  } else if (x < 0) {
    return -1;
  } else if (x === 0) {
    return 0; // Explicitly handle the case for x === 0
  } else {
    return 1;
  }
}

console.log(foo(null)); // Output: 0
console.log(foo(-1)); // Output: -1
console.log(foo(0)); // Output: 0
console.log(foo(1)); // Output: 1