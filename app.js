// sum.js
export function sum(a, b) {
  return a + b;
}
// --> Extract the last index of an array
export function lastIndex(array) {
  return array.at(-1);
}

export function isEven(n) {
  return n % 2 === 0;
} 

export function isOdd(n) {
  return n % 2 !== 0;
}
// Path: app.spec.js
