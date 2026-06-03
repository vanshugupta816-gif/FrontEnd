let a = 10 , b = 30;

console.log(a + b);
console.log(a * b);
console.log(a / b);
console.log(a - b);
console.log(a % b);

let c = 4;
console.log(a ** c); // exponent => 10^4

// Assignment Operators
let k = 5;
k = 6;
k += 2; // k=6+2=8
console.log(k);

//Comparison Operator
console.log(10 == "10"); // type nahi check krta
console.log(10 === "10"); // false
console.log(10 > 4); // true
console.log(6 <= 1); // false

// NOTE : use === and !== instead of == and !=

//Logical Operator
//NOTE : it is used for combining multiple conditions
// && ||

// Ternary Operator
//NOTE: short-hand for if-else
let age = 18;
let canVote = age >= 18 ? "yes" : "no";
console.log(canVote);

// unary
let c1 = 10;
console.log(c1++);
console.log(typeof c1);
console.log(!true);





