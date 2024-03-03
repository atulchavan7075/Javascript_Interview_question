function isPrime(number) {
    // Check if the number is less than 2 (not a prime number)
    if (number < 2) {
      return false;
    }
  
    // Check for divisibility by numbers from 2 to the square root of the given number
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false; // If divisible, it's not a prime number
      }
    }
  
    return true; // If not divisible by any number, it's a prime number
  }
  
  // Example usage:
  const testNumber = 17;
  const result = isPrime(testNumber);
  
  console.log(`${testNumber} is${result ? '' : ' not'} a prime number.`);
  