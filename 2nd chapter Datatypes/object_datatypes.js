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
console.log(test[my_testsym]); // Symbol(hello iam Symbol) ✅
console.log(typeof my_testsym); // "symbol" ✅ it execute line 1
console.log(typeof test[my_testsym]); // "symbol" ✅it execute line 5 inside my_testsym