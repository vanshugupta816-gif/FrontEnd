const age = 19;
if(age > 18){
    console.log("you are allowed to vote");
} else if ( age >60){
    console.log("you are not allowed to vote");
} else {
    console.log("you are a kid ");
}

const day = "Monday";
switch(day)
{
    case "Monday":
        console.log("Monday office day");
    break;
    case "Friday":
        console.log("Friday daru day");
        break;
        default:
            console.log("normal dy....");
}

for (let i = 1; i < 5; i++){
    console.log("hello buddy");
}

let i = 1;
while(i <= 5){
    console.log("hello" + i);
    i++;
}

// break : loop se bahar lga hai based on condition
// continue : based condition us iteration ko skip kr deta h
// return : return works with method to give return value or return caller method
