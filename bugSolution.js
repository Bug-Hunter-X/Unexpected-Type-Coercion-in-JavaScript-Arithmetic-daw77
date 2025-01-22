function foo(a, b) {
  return Number(a) + Number(b);
}

console.log(foo(1, '1')); // Output: 2

function foo2(a, b) {
  return parseInt(a) + parseInt(b);
}

console.log(foo2(1, '1')); // Output: 2