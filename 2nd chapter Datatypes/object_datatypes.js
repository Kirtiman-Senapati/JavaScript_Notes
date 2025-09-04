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
};

//console.log(test[typeof my_testsym]);
//console.log(test[my_testsym]); // Symbol(hello iam Symbol) ✅
//console.log(typeof my_testsym); // "symbol" ✅ it execute line 1
//console.log(typeof test[my_testsym]); // "symbol" ✅it execute line 5 inside my_testsym

//* here discuss how to chage value in object Through method without manual  
 test.age = 80
 test.FullName = "Rohit"
//console.log(test.FullName);

 /* Here discuss how use Freeze Method in object property No one change object Value   */

 //Object.freeze(test)
 test.Roll = 76
 //console.log(test);
 

//*  here discuss how add function in object */ 

test.greeting = function()
{
    console.log("Heello Kirtiman u try Functions");
    
}
console.log(test.greeting());
