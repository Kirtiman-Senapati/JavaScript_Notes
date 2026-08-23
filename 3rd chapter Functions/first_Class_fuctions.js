/* Functions are First-Class Values ⭐⭐⭐⭐⭐

Ye JavaScript ka very important concept hai.

JavaScript mein function ko value ki tarah treat kar sakte ho.

Matlab function ko:

1. Variable mein store karna function ko as a value 
2. Argument ke roop mein pass
3. Function se return function 
*/



//Variable mein store karna function ko as a value
const greet789 = function() {
    console.log("Hello");
};
console.log(greet789)   /* output kud ek function  ƒ () {
    console.log("Hello");
} */


//Function ko argument banana


const greet1 = function() {
    console.log("Hello");
};

function power_Call_another_function_as_Arguments()
{
    console.log("hi i call/pass first function greet as a argument in 2nd function")
}


greet1(power_Call_another_function_as_Arguments())//output 1st hi i call/pass first function greet as a argument in 2nd function then 1nd output hello


/* here call 1st power_Call_another_function_as_Arguments then call greet1  */


/* Another examle callback function  */


const greet = function(a) {
    a()
    console.log("Hello");
};


function power_Call_another_function_as_Arguments()
{
    
    console.log("hi i call/pass first function greet as a argument in 2nd function")
}

greet(power_Call_another_function_as_Arguments);

/*  yahan greet mein 2nd function name argument hua hai toh power_Call_another_function_as_Arguments argument hoke gaya hai greet function ke paas then greet function kisi bhi variable ke roop mein issh argument ko recieve karega matlab here greet mein yadi a parameter hua toh power_Call_another_function_as_Arguments = a hoga
then a ho jayega power_Call_another_function_as_Arguments  uske baad 
a() ko call karna ishe hin call back function bhi kehete hain*/