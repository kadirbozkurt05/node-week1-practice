const leftPad = require("left-pad");

let numbers = ["12", "846", "2", "1236"];

numbers.forEach((num) => {
  const result = leftPad(num, 8, "_");
  console.log(result);
});
