// Counter Factory Pattern using Closures
// Closures retain access to their lexical scope even when the function is executed outside that scope.
// You can spot a closure when a function is defined inside another function and the inner function references variables from the outer function.
// This example demonstrates a counter factory that creates independent counter objects with private state.

function createCounter() {
  let count = 0; // Private variable

  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  }
};

// Usage example
const counter1 = createCounter();
console.log(counter1.getCount()); // 0
console.log(counter1.increment()); // 1
console.log(counter1.increment()); // 2

const counter2 = createCounter();
console.log(counter2.getCount()); // 0
console.log(counter2.decrement()); // -1

console.log(counter1.decrement()); // 1