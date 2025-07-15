"use strict";

//const { use } = require("react");

// TODO: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = 55;
// Try changing to "hello", 10, null, NaN

if (typeof userInput === "number" && !isNaN(userInput)) {
  console.log("It is a number.");
} else {
  console.log("It is NOT a number.");
}

//-m "task02 solution"