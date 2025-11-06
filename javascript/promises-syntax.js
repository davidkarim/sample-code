// Here, the function fetchData returns a Promise.
// The Promise constructor takes a function with two parameters: resolve and reject.
// Inside the function, we simulate an asynchronous operation using setTimeout.
// After 1 second, we call resolve to indicate that the operation was successful.
// If there was an error, we would call reject instead.
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Error fetching data");
      }
    }, 1000);
  });
}

// Below is the traditional way of handling Promises using .then() and .catch().
fetchData()
  .then(result => {
    console.log(result); // "Data fetched successfully!"
  })
  .catch(error => {
    console.error(error);
  });

// Alternatively, we can use async/await syntax for a more synchronous-looking code.
// Promises should be called inside an async function with the await keyword.
async function getData() {
  try {
    const result = await fetchData();
    console.log(result); // "Data fetched successfully!"
  } catch (error) {
    console.error(error);
  }
}

getData();