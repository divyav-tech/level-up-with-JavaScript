function processUser(name, callback) {
    console.log("User:", name);
    callback();
}

function done() {
    console.log("Finished!");
}

processUser("Divya", done);

function calculate(a, b, operation) {
    return operation(a, b);
}

const add = (a, b) => a + b;
const subtract = (a , b) => a-b;
const multiply = (a , b) => a*b;
const divide = (a , b) => a/b;

console.log(`Addition: ${calculate(5, 4, add)}`);
console.log(`Subtraction: ${calculate(5, 4, subtract)}`);
console.log(`Multiplication: ${calculate(5, 4, multiply)}`);
console.log(`Division: ${calculate(5, 4, divide)}`);