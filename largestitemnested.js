function findLargestElement(nestedArray) {
    let largestElement = null;
  
    // Iterate through the nested array
    for (let i = 0; i < nestedArray.length; i++) {
      const currentArray = nestedArray[i];
  
      // Check each element in the current array
      for (let j = 0; j < currentArray.length; j++) {
        const currentElement = currentArray[j];
  
        // Update the largestElement if the current element is greater
        if (largestElement === null || currentElement > largestElement) {
          largestElement = currentElement;
        }
      }
    }
  
    return largestElement;
  }
  
  // Example usage:
  const nestedArray = [
    [3, 7, 2],
    [8, 11, 5],
    [4, 6, 9]
  ];
  
  const result = findLargestElement(nestedArray);
  
  console.log("The largest element in the nested array is:", result);
  