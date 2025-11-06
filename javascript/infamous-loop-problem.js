// This is the infamous loop problem in JavaScript, 
// often encountered when using 'var' in loops with asynchronous callbacks.
// The setTimeout callback is a closure that captures the variable 'i' by reference,
// leading to unexpected results.
for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log("Index: " + i);
  }, 1000); // Outputs "Index: 5" five times after 1 second
}
// The infamous loop problem occurs because 'var' is function-scoped, not block-scoped.
// By the time the setTimeout callbacks execute, the loop has completed and 'i' is 5 in all callbacks.

// Solution 1: Using IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration
for (var i = 0; i < 5; i++) {
  (function(index) {
    setTimeout(function() {
      console.log("1. Index: " + index);
    }, 1000);
  })(i);
}

// Solution 2: Using 'let' which is block-scoped (var is function-scoped)
for (let j = 0; j < 5; j++) {
  setTimeout(function() {
    console.log("2. Index: " + j);
  }, 1000);
}