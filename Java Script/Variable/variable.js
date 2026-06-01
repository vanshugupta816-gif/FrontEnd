//-------let--------
let shopName = "vanshu";
let customeNum = 10;

console.log(shopName);
console.log(customeNum);

customeNum=20; // ressenable
console.log(customeNum);

// let shopName = "vanshu"; // redeclare not possible

//------const--------
// when you know value is not need change then we will use const
// db config, address
// use when we have requirement

const adr = "H.N 553 , manav chownk, Ambala";
console.log(adr);

//adr = "H.N 554, aggresin chownk, Ambala"; // reassenable
console.log(adr);

//-------var-------
var name = "vanshu";
name = "Anaya"; // reassenable
console.log(name);

var name = "Krish";
console.log(name);

console.log(shopName);

function demo(){
    var x = "this is var x" ;
    console.log(x);  
}
demo();
//console.log(x); ReferenceError: x is not defined

// block
{
    const z = "this is const z";
    let y = "this is const y";
    var k = "this is const k";
}
// interview question
//console.log(z);
//console.log(y);
console.log(k);




// leading to bug
for(let index = 0; index < Array.length; index++){
    const element = array[index];
}




