// Before ES6 Modules: Using Closures for Data Privacy
// This pattern uses an IIFE (Immediately Invoked Function Expression) to create a module-like structure.
// This allows for creation of public and private methods and variables, simulating module encapsulation before ES6 modules were introduced.

const BankAccount = (function() {
  let balance = 0; // Private variable
  const transactions = []; // Private array to store transactions

  // Public API (returned object)
  return {
    deposit: (amount) => {
      if (amount > 0) {
        balance += amount;
        transactions.push({ type: 'deposit', amount });
        return balance;
      } else {
        throw new Error('Deposit amount must be positive');
      }
    },
    getBalance: () => balance,
    getHistory: () => transactions.slice() // Return a copy of the transactions array [..transactions]
  };
})();

BankAccount.deposit(100); // Works, deposits 100
BankAccount.deposit(50);  // Works, deposits 50
BankAccount.balance; // Undefined, cannot access private variable
console.log("Balance: ", BankAccount.getBalance());
console.log("History: ", BankAccount.getHistory());
