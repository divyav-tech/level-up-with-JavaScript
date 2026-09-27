const fruits = ["Apple", "Mango", "Banana"];
fruits.forEach(element => {
    console.log(element);
});

console.log("\n");

fruits.forEach((fruit, index)=>{
    console.log(`${fruit} at ${index}`)
});

console.log("\n");

const numbers = [10,20,30];

numbers.forEach(num =>{
    console.log(num*2);
});

const dramas = [
    "Queen of Tears",
    "Twinkling Watermelon",
    "My Sweet Mobster",
    "Can This Love Be Translated?",
    "Teach You a Lesson",
    "Revenge of others"
];

dramas.forEach(item =>{
    console.log(`🎬Recommendation: ${item}`);
});