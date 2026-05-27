// int[] arr= new int[10]; // java
const colors = ["red", "green", "blue", "yellow", "purple", "orange"];

// strong type
const arr = [10, "vanshu", true];

// access element
console.log(arr[0]);

// replace
arr[0] = 20;
console.log(arr[0]);
console.log(arr.length);

for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
// foreach
arr.forEach((a)=>{
    console.log(a);
});
console.log("-----------------");
for(let a of arr){
    console.log(a);
}





