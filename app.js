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

export function isPrime(n) {
  if (n <= 1) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

export function maxDistance(movements) {

  let distance = 0;
  let comodines = 0;

  for(let signo of movements) {
      if(signo === '>') {
          distance++;
      } else if(signo === '<') {
          distance--;
      } else {
          comodines++;
      }
  }

  return Math.abs(distance) + comodines;
}
// Path: app.spec.js
