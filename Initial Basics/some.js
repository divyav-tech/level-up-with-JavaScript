const numbers = [2,4,5];

console.log(numbers.some(num => num % 2 !== 0));
console.log(numbers.some(num => num > 10));

const marks = [95,88,76,99];
const topperExists = marks.some(mark => mark >= 90);

console.log(topperExists);

// Every
const numbers = [2,4,6,8];

const result = numbers.every(num => num % 2 === 0);

console.log(result);