// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     if (n == 0) return 0;
//     const arr = [0, 1];
//     for (let i = 2; i <= n; i++) {
//         arr.push(arr[i-2] + arr[i-1]);   
//     }
//     return arr[n]
// }

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
    }
}

// function fib(n, g = 0, p = 1) {
//     if (n === 0) return 1;
//     if (n === 2) return g + p;
//     return fib(n-1, p, g + p);
// }

function slowFib(n) {
    if (n < 2) return n;
    return fib(n-1) + fib(n-2);
}

fib = memoize(slowFib);

module.exports = fib;
