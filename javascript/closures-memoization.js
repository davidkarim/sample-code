// Use memoization (caching expensive computation results) to optimize a recursive Fibonacci function
// The memoize function is a closure that maintains a private cache of computed Fibonacci values.
// The cache in the closure allows the inner function to avoid redundant calculations by storing previously computed results.
function memoize(fn) {
    const cache = {}; // Private cache object in closure

    return function(...args) {
        const key = args.toString();

        if (cache[key]) {
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

const fibonacci = memoize(function(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
});

// Example usage:
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(50)); // Output: 12586269025