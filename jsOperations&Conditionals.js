// Lesson 2: Operators and Conditionals

/*
1. Comparison operators - comparing values
2. Logical operators - combining conditions
3. if/else statements - making decisions
4. Ternary operator - shortcut for if/else
5. Switch statements - multiple choices 
 */

// 1. Comparison Operator
/* 
Basic Comparisons:
1. Equal to (strict) - (===) - 5 === 5 - true
2. Not equal to (strict)- (!==) - 5 !== 3 - true
3. Greater than - (>) - 10 > 5 - true
4. Less than - (<) - 3 < 7 - true
5. Greater than or equal - (>=) - 5 >= 5 - true
6. Less than or equal - (<=) - 4 <= 4 - true
*/

const age = 25;
const price = 299.99;
const stock = 0;

console.log(age === 25); // true
console.log(age === "25"); //false
console.log(age !== 30); // true
console.log(price > 200); // true
console.log(stock <= 0); //true
console.log(age >= 18); //true (adult check)

// Important: === vs ==

// === - (Strict equality) - checks value and type use this
console.log(5 === 5); //true
console.log(5 === "5"); //false (number vs string)

// == - (Loose equality) - Only checks value avoid this
console.log(5 == 5); //true
console.log(5 == "5") // true (converts string to number)

// Rule: Always use === and !==

// 2. Logical Operators
// Combine multiple conditions together
/* 
1. AND - (&&) - Both must be true
2. OR - (||) - At least one must be true
3. NOT - (!) - Reverses true/false
*/

// AND Operator (&&)
// Both conditions must be true:

const age2 = 25;
const hasID = true;

// Can enter bar? (Must be 18+ AND have ID)
console.log(age2 >= 18 && hasID); //true

const age3 = 16;
console.log(age3 >= 18 && hasID); //false (age is under 18)

// Truth table for &&:
/* 
1. true - true - true
2. true - false - false
3. false - true - false
4. false - false - false
*/

// OR Operator (||)
// At least one condition must be true:

const isAdmin = false;
const isOwner = true;

// Can edit? (Must be an admin OR owner)
console.log(isAdmin || isOwner); //true

const isGuest = false;
const isMember = false;
console.log(isGuest || isMember); //false (both are false)

// Truth table for ||:
/* 
1. true - true - true
2. true - false - true
3. false - true - true
4. false - false - false
*/