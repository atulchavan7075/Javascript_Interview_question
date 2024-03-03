function calculateTip(billAmount, tipPercentage) {
    if (typeof billAmount !== 'number' || typeof tipPercentage !== 'number') {
      // Check if the input parameters are valid numbers
      return 'Invalid input. Please provide valid numbers.';
    }
  
    if (billAmount < 0 || tipPercentage < 0) {
      // Check if the input values are non-negative
      return 'Invalid input. Please provide non-negative values.';
    }
  
    // Calculate the tip
    const tip = (billAmount * tipPercentage) / 100;
    
    return tip;
  }
  
  // Example usage:
  const billAmount = 50;
  const tipPercentage = 15;
  const tipValue = calculateTip(billAmount, tipPercentage);
  
  console.log(`For a bill of $${billAmount} and a ${tipPercentage}% tip, the tip amount is $${tipValue.toFixed(2)}.`);
  