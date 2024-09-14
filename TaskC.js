"use strict";
// 100 Days Of Coding Challenge!
/** Question 147:
Explain how to handle errors in a callback pattern.*/
//----------------------------------------------------
// Define a function that accepts a callback with error handling
function fetchData(callback) {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        // Simulate an error condition
        const errorOccurred = true;
        if (errorOccurred) {
            // Pass an error object to the callback
            callback(new Error("Failed to fetch data"));
        }
        else {
            // Pass null for error and some data to the callback
            callback(null, "Fetched data successfully");
        }
    }, 1000);
}
// Call the fetchData function with a callback
fetchData((error, data) => {
    if (error) {
        console.error("Error:", error.message); // Output: Error: Failed to fetch data
    }
    else {
        console.log("Data:", data); // This line won't be executed in this example
    }
});
