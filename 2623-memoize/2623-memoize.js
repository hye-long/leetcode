function memoize(fn) {
  const cache = {}; 

  return function(...args) {
    const key = JSON.stringify(args); 
    if (cache[key] === undefined) { 
      cache[key] = fn(...args); 
    }

    return cache[key]; 
  };
}


function sum(a, b) {
  return a + b;
}


function fib(n) {
  if (n <= 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}


function factorial(n) {
  if (n <= 1) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

