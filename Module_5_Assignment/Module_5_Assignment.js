// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Test cases / Execution
let tempC = 25;
let convertedF = celsiusToFahrenheit(tempC);
console.log(`${tempC}°C is equal to ${convertedF}°F`);

// Function to calculate factorial
function findFactorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers";
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

// Test cases / Execution
let num = 5;
console.log(`The factorial of ${num} is:`, findFactorial(num));

// Function to check if a word is a palindrome
function isPalindrome(str) {
    // Clean string: convert to lowercase to handle case sensitivity
    let cleanStr = str.toLowerCase();
    let reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}

// Test cases / Execution
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("Hello"));   // false

// Function to sum array elements
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Test cases / Execution
let numbers = [10, 20, 30, 40, 50];
console.log("Array:", numbers);
console.log("Sum of elements:", sumOfArray(numbers));

// Function for FizzBuzz logic from 1 to 15
function runFizzBuzz() {
    for (let i = 1; i <= 15; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

// Execution
runFizzBuzz();