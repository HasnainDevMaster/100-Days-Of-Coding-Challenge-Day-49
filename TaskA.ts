// 100 Days Of Coding Challenge!

/** Question 145: Creating Dynamic Functions with Callbacks
Create a function that accepts a callback and invokes it with some arguments.*/

//------------------------------------------------------------------------------

// Define a function that accepts a callback and invokes it with arguments
function processData(callback: (data: string) => void): void {
  // Sample data to be passed to the callback
  const data = "Coding, TypeScript!";

  // Invoke the callback function with the data
  callback(data);
}

// Define a callback function that logs the received message
processData((message) => {
  console.log(message); // Output: Coding, TypeScript!
});
