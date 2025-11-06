// Async functions and Promises rely on closures to maintain state across asynchronous operations.
// In this example, we create asynchronous tasks that simulate delays using Promises and async/await syntax.
// Each task captures its own 'duration' variable from the outer scope, demonstrating closure behavior in async code.
function createAsyncTask(duration) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task completed in ${duration} ms`);
    }, duration);
  });
}

async function runTasks() {
  console.log("Starting tasks...");

  const task1 = await createAsyncTask(1000);
  console.log(task1);

  const task2 = await createAsyncTask(2000);
  console.log(task2);

  const task3 = await createAsyncTask(1500);
  console.log(task3);

  console.log("All tasks completed.");
}

runTasks();