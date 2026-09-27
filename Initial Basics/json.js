const user = {
    name: "Divya",
    age: 18
};
//Stringify
const jsonUser = JSON.stringify(user);
console.log(jsonUser);
//Parse
const jsonEmployee = '{"name":"Divya","salary":70000}'
const employee = JSON.parse(jsonEmployee);
console.log(employee.name);
console.log(employee.salary);