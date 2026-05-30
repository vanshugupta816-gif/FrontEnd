//------primitive--------
let userName = "vanshu"; // String
let age = 28; // number
let flag = true; // boolean
let phone; // undefined
let car = null; // null
let bigNum = 121323n; // bignit
let uniquekey = symbol("userId");

//------non-primitive-------

let courses = ["JS", "react", "SpringBoot", "java"];
// Car car = new Car();
let userss = {name : "vanshu",phone : 2323230323}; //object
function welcome()
{
    return "hello";
}
console.log(typeof userName);
console.log(typeof phone);
console.log(typeof car);
console.log(typeof welcome);
console.log(typeof courses);
console.log(typeof "object");
console.log(typeof null);

