//* interview Preparation Strict Equality

//console.log("2" > 1);// it converts 2 string to numer then compare with number 1 "2" > 1 so print output true 
//console.log("02" >1);;// it converts 02 string to numer then compare with number 1 "02" > 1 so print output true 



//console.log(null > 0);// it converts null to 0 then compare with 0 here 0 not greater than 0 so output false 
//console.log(null >= 0);// it converts null to 0 then compare with 0 here 0 not greater than and equal to 0 so output true 
//console.log(null == 0);// it converts null to Nan  then compare with 0 here NaN not equal to 0 so output false 


//console.log(undefined > 0);// false
//console.log(undefined >= 0); // false
//console.log(undefined == 0);// false



/* Always write clean code use comparative with Same data type 

but in typeScript it not convert string to number in comparision time it showing error but Java script Automatically Detect which Type of operator use in comparison*/


//    === used in Strict check 

let num =Number("12345")
//console.log(num,typeof num);

// hoisting in var,let,const

x = 9
//console.log(x,typeof x);
var x = 6


//team_member = 10
//const team_member = 23
//console.log(team_member);
// in const hoisting occurs not print out value due to temporal dead zone becase const and let keyword  use block scope 


let coercion 
console.log(coercion, typeof coercion);// output  and type undefined

coercion = 78
console.log(coercion, typeof coercion);

coercion = coercion + ""
console.log(coercion, typeof coercion);

coercion = coercion - 2
console.log(coercion,typeof coercion);

// javascript automatically change the datatype as per situation in line 48 coercion convert number value to sting then line 51 it converts to number it automatically change datatype as per program code situation so it called coersion







