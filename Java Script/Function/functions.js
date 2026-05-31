// 1. function declaration
// the way how to define the func

function welcome(){
    console.log("welcome to my duniya");
}
welcome();

// function expression : func can be store in variable is called func expression
const wel = function(){
    console.log("hello guzz..");
};
// how to call the method
wel();

// arrow func (=>)
// NOTE : ES6 shorter syntax
const sub = (a , b) =>{ // parameter
    return a - b;
}
console.log(sub(20, 10)); // argument

const sq = (s) => s * s;
console.log(sq(s));

//default para
//NOTE : when no argument is passed
function greet(name) {
    console.log("hello" + name);
}
greet("vanshika");
greet();

// func scope
// NOTE : variable inside func can't be access outside
function showName(){
    let name = "Vanshika Gupta";
    console.log(name);
}
showName();
console.log(name);

// callback func
// NOTE: pizza ready then call me
// defination : A call function is just a function that you can pass to another function
function hello(name){
    console.log("Welcome Ms." + name);
}
function getCustomerMsg(callback){
    const name = "vanshu";
    callback(name); // calling the passed function
}
getCustomerMsg(hello);



