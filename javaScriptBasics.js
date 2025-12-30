/* Variables - Storing Information
A variable is like a labeled container that holds data. */

// Three ways to declare variables

// let - Use when value will change
let score = 0;
score = 10; // can change
score = 20; // can change again

// const - Use when value will NEVER change
const birthYear = 1999;
// birthyear = 2000; // ERROR! Cannot change const

// var - OLD way, don't use
var oldVariable  = "avoid this";

 /* 📌 Rule of Thumb:

Use const by default
Use let if you need to change the value
Never use var */

/* Data Types - Kinds of Information
JavaScript has 7 basic data types. Let's learn the main ones: */

// A. String (Text)
const firstName = "Kenon";
const lastName = "Sahirani";
const greeting = `Hello, my name is ${firstName} ${lastName}`; // Template literal

console.log(greeting); // "Hello, Kenon!"

// B. Number"(Numerical values)

const age = 25;
const price = 199.99;
const negative = 10;

// Math operations
console.log(10 + 5); // 15(addition)
console.log(10 - 5); // 5 (substraction)
console.log(10 * 5); // 50 (multiplication)
console.log(10 / 5); // 2 (division)
console.log(10 % 3); // 1 (remainder/modulo)