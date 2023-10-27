import { padLeft } from "./padLeft.js";

let numbers = ["12", "846", "2", "1236"];

numbers.forEach((num) => {
  const result = padLeft(num, 5, "_");
  console.log(result);
});
