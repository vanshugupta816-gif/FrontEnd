let name = "vanshika";
let surname = "gupta";
let msg = "welcome Ms.${name}";
console.log(msg);

let a = "hello i am vanshu";
console.log(a[1]);

let name2 = "Anaya";
name2[0] = "k"; // not allowed, string are immutable
console.log(name2);
name2 = "laduu"; // new string will be created
console.log(name2);

// you can't change char directly , only reassingment is whole string is possible

// type conversion
let s = 100;
let t = string(s); // "100"
let ss = "77";
let num = Number("ss"); // 77
let bool = Boolean("hello"); // true
console.log(typeof ss);
console.log(typeof num);

let num1 = Number("abc"); // 77
console.log(num1);

let bool1 = Boolean(""); //true
console.log(bool1);

Boolean(null); //false
Boolean(undefined); //false
Boolean(""); //false




