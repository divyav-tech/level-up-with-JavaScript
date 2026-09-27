const numbers = [2,4,6,8];

const find = numbers.find(num => num > 5);

console.log(find);

const names = ["Aman","Divya","Riya"];

const result = names.find(name => name.length > 4);

console.log(result);

const students = [
    {name:"Divya", marks:95},
    {name:"Riya", marks:88},
    {name:"Ananya", marks:95}
];

const topper = students.find(student => student.marks === 95);

console.log(topper.name);

const dramas = [
    {title:"Queen of Tears", rating:9.5},
    {title:"Twinkling Watermelon", rating:9.8},
    {title:"Business Proposal", rating:9}
];

const favoriteDrama = dramas.find( drama => drama.rating===9.8);
console.log(`My favourite kdrama is ${favoriteDrama.title}!!`);