function findSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array should contain at least two elements";
    }

    let largest = arr[0];
    let secondLargest = arr[1];

    if (secondLargest > largest) {
        [largest, secondLargest] = [secondLargest, largest];
    }

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// Example usage:
const arr = [3, 8, 1, 10, 5, 6];
console.log("Second largest element:", findSecondLargest(arr)); // Output: 8
