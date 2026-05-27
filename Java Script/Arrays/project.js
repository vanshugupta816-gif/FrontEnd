// Shopping cart
// initialization empty array
let cart = [];

// add item
cart.push("T-shirt");
cart.push("shoes");
cart.push("watch");

console.log("cart item : ", cart);

// removing item
let popItem = cart.pop(); // remove value from last
console.log("pop item", popItem);
console.log("cart item : ", cart);

//h.w for
console.log("your carts is:");
cart.forEach((item, index) => {
    console.log('${index} => ${index}');
});
// check if shoes if there
if(cart.include("shoes")){
    console.log("ha bhai bechte ha");
} else{
    console.log("na bhai");
}

// write a function to remove value which passes in  para 
function removeItem(itemName){

}
removeItem("shoes")

