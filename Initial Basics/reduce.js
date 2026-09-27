const prices = [500,1200,300];
const sum = prices.reduce(( total , num) =>{
    return total+ num;
},0);

console.log(sum);

const numbers = [5,18,9,22];
const largest = numbers.reduce((max, num) => {
    return num > max ? num : max;
}, numbers[0]);

console.log(largest);

const cart = [
    {name:"Laptop", price:50000},
    {name:"Mouse", price:800},
    {name:"Keyboard", price:1500}
];

const totalPrice = cart.reduce((sum , item) =>  {
    return sum + item.price;
},0);

console.log(`Total Price ₹${totalPrice}`);