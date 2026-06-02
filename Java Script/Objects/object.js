const student = {
    name:"vanshika",
    age:20,
    course:"java"
};

// accessing
// NOTE: dot notation
console.log(student.name);

// bracket notation
console.log(student["age"]);

// add / update / delete
student.name = "Anaya"; // update
student.add = "Ambala" // add
console.log(student);
delete student.add;
console.log(student);

const user = {
    name:"Anaya",
    address : {
        city :"Ambala",
        state :"Haryana",
    },
};
console.log(user.address.city);

const person = {
    name : "vanshu",
    welcome(){
        console.log('hello i am ${this.name}');
    },
};
person.welcome();

// NOTE : this means current object

const obj = {
    name: " vanshu",
    age : 20,
    course :"java",
};
for(let key in obj) {
    console.log('${key} : ${obj[key]}');
}
Object.keys(obj).forEach((key) => {
    console.log('${key} : ${obj[key]}');
});
Object.values(obj).forEach((v) => {
    console.log(v);
});




