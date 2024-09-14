// 100 Days Of Coding Challenge!

/** Question 146: Filtering Arrays with Custom Conditions
Show an example of a callback function used to filter an array of numbers.*/

//--------------------------------------------------------------------------

// Define a function that filters an array based on a callback condition
function filterArray(
  numbers: number[],
  callback: (num: number) => boolean
): number[] {
  // Use the filter method with the callback to filter the array
  return numbers.filter(callback);
}

// Define a callback function that checks if a number is even
const isEven = (num: number): boolean => num % 2 === 0;

// Call the filterArray function with the numbers array and the isEven callback
const numbers = [10, 20, 30, 40, 50, 60];
const evenNumbers = filterArray(numbers, isEven);

console.log(evenNumbers); // Output: [ 10, 20, 30, 40, 50, 60 ]
