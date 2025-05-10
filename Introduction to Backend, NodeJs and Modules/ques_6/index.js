const sum = require("./sum");
const subtract = require("./subtraction");
const multiply = require("./multiplication");
const divide = require("./division");

let sumResult = sum(3, 5);
console.log("Sum:", sumResult);

let subResult = subtract(10, 4);
console.log("Subtraction:", subResult);

let mulResult = multiply(4, 6);
console.log("Multiplication:", mulResult);

let divResult = divide(12, 4);
console.log("Division:", divResult);
