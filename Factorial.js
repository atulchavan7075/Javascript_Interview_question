function calculateFactorial(number) {
    // Check if the input is a non-negative integer
    if (typeof number !== 'number' || number < 0 || !Number.isInteger(number)) {
      return "Please enter a non-negative integer.";
    }
  
    // Base case: factorial of 0 is 1
    if (number === 0) {
      return 1;
    }
  
    // Recursive case: multiply the number by the factorial of (number - 1)
    return number * calculateFactorial(number - 1);
  }
  
  // Example usage:
  const inputNumber = 4;
  const result = calculateFactorial(inputNumber);
  
  console.log(`The factorial of ${inputNumber} is: ${result}`);
  