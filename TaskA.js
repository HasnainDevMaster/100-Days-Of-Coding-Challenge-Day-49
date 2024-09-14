"use strict";
// 100 Days Of Coding Challenge!
/** Question 145:
Create a function that accepts a callback and invokes it with some arguments.*/
//------------------------------------------------------------------------------
// Define a function that accepts a callback and invokes it with arguments
function processData(callback) {
    // Sample data to be passed to the callback
    const data = "Coding, TypeScript!";
    // Invoke the callback function with the data
    callback(data);
}
// Example usage of processData function
processData((message) => {
    console.log(message); // Output: Coding, TypeScript!
});
