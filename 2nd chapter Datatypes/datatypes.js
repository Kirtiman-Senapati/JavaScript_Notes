
//*******  Data Types in JS ****************/
/*
   Mainly  used 2 types of datatypes used
    1. primitive
    2. non primitive

    in primitive 7 Types datatypes used in Javascript
    N=Null
    N=Number
    S=symbol
    S=String
    B=Boolean
    B=BigInt
    U=undefined

*/
//* Primitive Data Types in JavaScript

// 1. Null
let n = null;
//console.log("Null:", n);

// 2. Number
let num = 123;
//console.log("Number:", num);

// 3. Symbol
let sym = Symbol("id");
//console.log("Symbol:", sym);

// 4. String
let str = "Hello JavaScript";
//console.log("String:", str);

// 5. Boolean
let isTrue = true;
//console.log("Boolean:", isTrue);

// 6. BigInt (for very large numbers)
let big = 123456789012345678901234567890n;
//console.log("BigInt:", big);

// 7. Undefined (when value not assigned)
let u;
//console.log("Undefined: becose no declare u", u);

// Another way print all Variables
//console.log(n,num,sym,str,isTrue,big,u);
/*  
 * in Non primitive 3 Types datatypes used in Javascript
    1. Arrays
    2. Objects
    3. Functions 
*/
//* here only Discuss Objects later Discuss Arrays and funtions in another files
const item = 
{
    Roll :123879,
    lovish:false,
    name :"kirti",
    age:32,
    roll_no:67878,
    Rollno:98760
   // in identifier or variable name using space or startring with no show error Example like Roll no here use gap after roll and starting with numer shows same error 
}
//console.log(item);

//*Another Way call spececic property in object

const test = 
{
    Roll :123879,
    lovish:false,
    name :"kirti",
    age:32,
    section: "B",
    location:"chhatia",
    lastloggedindays:["Monday", "Tuesday"]

}
//console.log(test.lovish);
//*Right Way call specific property in object in companies
console.log(test["lovish"]);

//! under object property Automatic Consider String Example Here Roll automaticaly consider "Roll"Like it Automatically Convert Section = "Section"
// so when access by Dot Opertor (test.lovish) no need to write Lovish into ""double Quoted line but in Square bracket test["lovish"] need lovish into Double Quoted Line 