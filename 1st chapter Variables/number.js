const score = 300

console.log(score);


const balance = new Number(100)  //here object use through new keyword

console.log(balance);


// * use methods in number

console.log(balance.toString().length);

//to string() used convert number property to string then easily used string method

console.log(balance.toFixed(2));//to fixed use show fixed decimal value



const otherNumber = 1145.8987

console.log(otherNumber.toPrecision(4));
//input 45.0987 output 45.1 because here focuses 45.0

//when input 145.0987 show output 145 because it focuses 3 values 145 


//when input 145.8987 show output 146 because it focuses 3 values 145



//when input 1145.0987 show output 1.15e+3 because it focuses 3 values 145



//* Discuss Local String
const hundreds = 10000000
console.log(hundreds.toLocaleString());// use to comma in number and it used to particular country value/ standard 

console.log(hundreds.toLocaleString("en-IN"));











