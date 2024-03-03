console.log('Atul')


function countDigitThreeInRange(start, end) {
    let count = 0;
  
    for (let number = start; number <= end; number++) {
      const digits = String(number).split('');
      count += digits.filter(digit => digit === '3').length;
    }
  
    return count;
  }
  
  const startRange = 1;
  const endRange = 10;
  const result = countDigitThreeInRange(startRange, endRange);
  
  console.log(`Occurrences of digit '3' in the range ${startRange} to ${endRange}: ${result}`);
  