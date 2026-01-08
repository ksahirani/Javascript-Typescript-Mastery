// Practice Exercise 1: Create a profile
const fullName = "Kenon Macabada Sahirani";
const age = 32;
const isDeveloper = true;
const skills = ["Javascript/Typescript", "Express", "React", "Java", "Springboot", "C#", "ASP.Net Core", "SQL", "PostgreSQL"];
const info = {
        name: "Kenon Sahirani",
        country: "Philippines",
        frontend: ["HTML, CSS, Tailwind"], // Array
        backend: ["Java, C#, Javascript, Ruby, Python"], // Array 
        database: ["postgresql, mysql, mongodb"] // Array
        // Make a small improvement: in info because info has skills as strings,
        // Use arrays for multiple values, to make it easier to loop or count skills later!
}

console.log("Name:", fullName);
console.log("Age:", age);
console.log("Is Developer:", isDeveloper);
console.log("Skills:", skills);
console.log("Profile:", info);
