function filterEvenNumbers(inputArray) {
    // Use the filter method to create a new array containing only even numbers
    const evenNumbersArray = inputArray.filter(number => number % 2 === 0);
    return evenNumbersArray;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const evenNumbers = filterEvenNumbers(numbers);
  
  console.log("Original Array: ", numbers);
  console.log("Even Numbers Array: ", evenNumbers);
  