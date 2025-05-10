// Import the boxen module
const boxen = require('boxen');

// Define message and title
const message = "I am using my first external module!";
const title = "Hurray!!!";

// Classic style (default)
const box1 = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "classic"
});

// SingleDouble style
const box2 = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "singleDouble"
});

// Round style
const box3 = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "round"
});

// Bonus: Add background and color customization
const box4 = boxen(message, {
  title: title,
  padding: 1,
  margin: 1,
  borderStyle: "double",
  backgroundColor: "blue",
  borderColor: "yellow"
});

// Print all boxes
console.log(box1);
console.log(box2);
console.log(box3);
console.log(box4); // Optional: Bonus output
