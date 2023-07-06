const average = 5.9;
const status1 = average >= 5.5 ? "OK" : "Failed";
console.log(`Result: ${status1}`);

let max = 0;

const a = 5;
const b = 8;
const c = 3;

max = a > b ? a : b;
max = max > c ? max : c;

console.log(`The largest number is ${max}`);
