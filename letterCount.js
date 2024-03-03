function countLetters(str) {
    var letterCounts = {};

    // Loop through each character of the string
    for (var i = 0; i < str.length; i++) {
        var char = str[i].toLowerCase(); // Convert the character to lowercase

        // Check if the character is a letter
        if (/[a-z]/.test(char)) {
            // If the character is a letter, update its count in the letterCounts object
            letterCounts[char] = (letterCounts[char] || 0) + 1;
        }
    }

    // Return the object containing letter counts
    return letterCounts;
}

// Example usage:
var str = "Hello World";
var letterCounts = countLetters(str);
console.log(letterCounts);
