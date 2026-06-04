let fullName = " Vanshika Gupta ";
fullName = fullName.trim();
console.log(fullName);

// to lower and slip
let nameSlipt = fullName.toLowerCase().split(/s+/); // [vanshika,gupta]
console.log(nameSlipt);

// capatalize each part
function toTitleCase(s){
    return s[0].toUpperCase + s.slice(1);
}
let fname = toTitleCase(nameSlipt[0]);
let lname = toTitleCase(nameSlipt[1]);
console.log(fname);
console.log(lname);



