
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
const my_testsym = Symbol("hello iam Symbol")

const test = 
{
    Roll :123879,
    lovish:false,
    name :"kirti",
    age:32,
    section: "B",
    location:"chhatia",
    lastloggedindays:["Monday", "Tuesday"],
    "FullName": "kirtiman",
    [my_testsym]:Symbol("hello iam Symbol"),
    //? here after add Full name to Double quotes "" ya all values "FullName": "kirtiman" if write this way then canot call SPECIFIC Property by Dot operator (test.FullName);this method not work only Square Bracket Method work (test["FullName"]);

    

}
//console.log(test.lovish);
//*Right Way call specific property in object in companies
console.log( typeof test[my_testsym]);

//! under object property Automatic Consider String Example Here Roll automaticaly consider "Roll"Like it Automatically Convert Section = "Section"
// so when access by Dot Opertor (test.lovish) no need to write Lovish into ""double Quoted line but in Square bracket test["lovish"] need lovish into Double Quoted Line 



//*********************** */ intresting interview Quesion About Objects/*************** */

/* singleton not create in  Object Literals 
   only constructor singleton created
   object.create - it is a constructor
   if it symbol without changing it data type string how it is possible ?
   ANS : symbol datatypes not directly Used in object like string ,number so if use symbol in object first declare varible then use it by reference below write it but in object if i want to use symbol without changing data types then use this syntax [my_testsym] in object property.

   const my_testsym = Symbol("hello iam Symbol")

   * What is the Temporal Dead Zone?
The Temporal Dead Zone is a period where a variable exists in memory but cannot be accessed. It starts when the code execution enters the block containing the variable and ends when the variable is initialized with a value. During this "dead zone," any attempt to access the variable throws a ReferenceError.

Why This Happens
Variables declared with const and let are hoisted (moved to the top of their scope) but are not initialized until their declaration line is reached. Unlike var variables which are initialized with undefined, const and let variables remain uninitialized in the TDZ

The error suggests you're trying to use my_testsym before this line executes. This commonly happens when:

Accessing the variable before declaration

Circular dependencies in modules

Variable redeclaration in the same scope

Using the variable in hoisted function calls

  ?Solutions 

Declare first, then use
const my_testsym = Symbol("hello iam Symbol");
console.log(my_testsym); // Works perfectly

*/
