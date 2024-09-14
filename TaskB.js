"use strict";
// 100 Days Of Coding Challenge!
/** Question 146:
Show an example of a callback function used to filter an array of numbers.*/
//--------------------------------------------------------------------------
// Define a function that filters an array based on a callback condition
function filterArray(numbers, callback) {
    // Use the filter method with the callback to filter the array
    return numbers.filter(callback);
}
// Example callback function to filter even numbers
const isEven = (num) => num % 2 === 0;
// Example usage of filterArray function
const numbers = [10, 20, 30, 40, 50, 60];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Output: [ 10, 20, 30, 40, 50, 60 ]
