//* interview Preparation Strict Equality

console.log("2" > 1);// it converts 2 string to numer then compare with number 1 "2" > 1 so print output true 
console.log("02" >1);;// it converts 02 string to numer then compare with number 1 "02" > 1 so print output true 



console.log(null > 0);// it converts null to 0 then compare with 0 here 0 not greater than 0 so output false 
console.log(null >= 0);// it converts null to 0 then compare with 0 here 0 not greater than and equal to 0 so output true 
console.log(null == 0);// it converts null to Nan  then compare with 0 here NaN not equal to 0 so output false 


console.log(undefined > 0);// false
console.log(undefined >= 0); // false
console.log(undefined == 0);// false



/* Always write clean code use comparative with Same data type 

but in typeScript it not convert string to number in comparision time it showing error but Java script Automatically Detect which Type of operator use in comparison*/


//    === used in Strict check 