"use strict";

// TODO: Write if/else if to print:
// Password < 6 chars → "Too short"
// 6–10 chars → "Moderate"
// 11+ chars → "Strong"

const password = "1234567891";
console.log(password.length);

if(password.length < 6 ) {
    console.log("Too short");
}else if(password.length >=6 && password.length <=10 ){
    console.log("Moderate");
}else {
    console.log("Strong");
}


//-m "task03 solution"