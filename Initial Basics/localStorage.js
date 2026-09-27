const user = {
    name: "Divya",
    age: 18
};

localStorage.setItem("user", JSON.stringify(user));
const tasks = ["Study", "Code", "Exercise"];

localStorage.setItem("tasks", JSON.stringify(tasks));