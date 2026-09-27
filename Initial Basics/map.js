const numbers = [1,2,3];

const doubled = numbers.map(num => num * 2);

console.log(numbers);
console.log(doubled);

const names = ["divya" ,"ananya" , "anshika" , "radhika" , "meghaa"];
const new_names = names.map(name =>{
    return name.toUpperCase(name);
});

console.log(names);
console.log(new_names);

// Object Mapping
const students = [
    {name:"Divya", cgpa:9.2},
    {name:"Priya", cgpa:8.8}
];

const stu_name = students.map(student => student.name);
const stu_cgpa = students.map(student => student.cgpa)

console.log(stu_name);
console.log(stu_cgpa);

const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Pendrive"
];

const iconProducts = products.map(item => {
    return `🛒 ${item}`;
});

console.log(iconProducts);