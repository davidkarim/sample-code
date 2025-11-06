// Currying Example using multiplication function
// Currying is a technique in functional programming where a function with multiple arguments
// is transformed into a sequence of functions each taking a single argument.
function multiply(a) {
  return function(b) {
    return a * b;
    }
  }

  // Create specialized functions
const double = multiply(2);
const triple = multiply(3);

// Usage examples
console.log(double(5)); // 10
console.log(triple(5)); // 15