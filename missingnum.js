function findMissingNumber(arr) {
    const n = arr.length + 1; // Total number of elements including the missing one
    const expectedSum = (n * (n + 1)) / 2; // Sum of consecutive numbers
    const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of the elements in the array
    return expectedSum - actualSum;
  }
  
  const numbersArray = [1, 2, 3, 5, 6]; // Assuming one number is missing
  const missingNumber = findMissingNumber(numbersArray);
  console.log("Missing number:", missingNumber);
  