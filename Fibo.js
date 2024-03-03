function generateFibonacciSequence(numTerms) {
    // Check if the input is a positive integer
    if (typeof numTerms !== 'number' || numTerms <= 0 || !Number.isInteger(numTerms)) {
      return "Please enter a positive integer for the number of terms.";
    }
  
    const fibonacciSequence = [0, 1];
  
    // Generate the Fibonacci sequence
    for (let i = 2; i < numTerms; i++) {
      const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextTerm);
    }
  
    return fibonacciSequence;
  }
  
  // Example usage:
  const numberOfTerms = 4;
  const fibonacciResult = generateFibonacciSequence(numberOfTerms);
  
  console.log(`The Fibonacci sequence up to ${numberOfTerms} terms is:`, fibonacciResult);
  