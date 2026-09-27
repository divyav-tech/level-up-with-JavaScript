const numbers = [100,5,20,3];

numbers.sort((a,b)=>a-b);

console.log(numbers);

const names = ["Riya","Divya","Ananya"];

names.sort();

console.log(names);
const dramas = [
    {title:"Queen of Tears", rating:9.5},
    {title:"Business Proposal", rating:8.8},
    {title:"Twinkling Watermelon", rating:9.8},
    {title:"18 Again", rating:8.5}
];
dramas.sort((a,b) => b.rating - a.rating);
console.log(dramas);