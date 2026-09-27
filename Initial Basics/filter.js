const ages = [12,18,20,15,25];

const adults = ages.filter(age => age >= 18);

console.log(adults);

const students = [
    {name:"Divya", marks:95},
    {name:"Riya", marks:82},
    {name:"Ananya", marks:91},
    {name:"Aditi", marks:70}
];

const toppers = students.filter(student => student.marks>90);
console.log("Toppers are: ",toppers);

const dramas = [
    { title: "Queen of Tears", rating: 9.5 },
    { title: "My Sweet Mobster", rating: 8.8 },
    { title: "Twinkling Watermelon", rating: 9.8 },
    { title: "Business Proposal", rating: 9 },
    { title: "18 Again" , rating: 8.5},
    { title: "Behind Your Touch" , rating: 7.9}
];

const topDramas = dramas.filter(drama => drama.rating >= 9);
console.log("Top Rated Dramas are: " ,topDramas);