// Import the built-in crypto module
const crypto = require('crypto');

// Get command line arguments (operation and numbers)
const [, , operation, ...args] = process.argv;

// Convert all numeric arguments to numbers
const numbers = args.map(Number);

// Function to perform mathematical operations
function calculator(operation, numbers) {
  switch (operation) {
    case 'add':
      return numbers.reduce((a, b) => a + b, 0);

    case 'sub':
      return numbers.reduce((a, b) => a - b);

    case 'mult':
      return numbers.reduce((a, b) => a * b);

    case 'divide':
      if (numbers.includes(0)) return 'Error: Division by zero';
      return numbers.reduce((a, b) => a / b);

    case 'sin':
      return Math.sin(numbers[0]);

    case 'cos':
      return Math.cos(numbers[0]);

    case 'tan':
      return Math.tan(numbers[0]);

    case 'random':
      if (numbers.length === 0) {
        return "Provide length for random number generation.";
      }
      const length = numbers[0];
      const random = crypto.randomBytes(length).toString("hex");
      return random;

    default:
      return "Invalid operation";
  }
}

// Execute the operation and print the result
const result = calculator(operation, numbers);
console.log(result);
