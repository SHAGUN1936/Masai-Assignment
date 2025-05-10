const sum = require("./sum");
const subtract = require("./subtraction");
const multiply = require("./multiplication");
const divide = require("./division");

const [,, operation, a, b] = process.argv;
const num1 = Number(a);
const num2 = Number(b);

switch (operation) {
  case 'sum':
    console.log(sum(num1, num2));
    break;
  case 'subtract':
    console.log(subtract(num1, num2));
    break;
  case 'multiply':
    console.log(multiply(num1, num2));
    break;
  case 'divide':
    console.log(divide(num1, num2));
    break;
  default:
    console.log("Invalid operation. Use sum, subtract, multiply, or divide.");
}
