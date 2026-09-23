// Function to check if a number is even or odd
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        return `${num} is Even`;
    } else {
        return `${num} is Odd`;
    }
}

// Test cases
console.log(checkEvenOrOdd(4));  
console.log(checkEvenOrOdd(7));

// Function to find the largest of three numbers
function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// Test case
console.log("The largest number is:", findLargest(15, 42, 28));

// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test case
let originalText = "Automation";
console.log("Original:", originalText);
console.log("Reversed:", reverseString(originalText));

// Function to count vowels in a string
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// Test case
let sampleText = "Playwright and JavaScript";
console.log("String:", sampleText);
console.log("Vowel Count:", countVowels(sampleText));

// Function to remove duplicate values using ES6 Set
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Test case
let numbers = [10, 20, 20, 30, 40, 10, 50, 30];
console.log("Original Array:", numbers);
console.log("Unique Array:", removeDuplicates(numbers));