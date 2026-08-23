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

/* here call 1st power_Call_another_function_as_Arguments then call greet1  , */




/* *************callback function ********** */
/* callback function hai ek function jo khud call nahi hota dusra function  ko call karta hai  */

/*  examle function  */


const greet = function(a) {
    a()
    console.log("Hello");
};


function power_Call_another_function_as_Arguments()
{
    
    console.log("hi i call/pass first function greet as a argument in 2nd function")
}

greet(power_Call_another_function_as_Arguments);//here greet call power_Call_another_function_as_Arguments,power_Call_another_function_as_Arguments khud ko call nahi kar raha so 1st output  hi i call/pass first function greet as a argument in 2nd function 2nd output hello

/*  yahan greet mein 2nd function name argument hua hai toh power_Call_another_function_as_Arguments argument hoke gaya hai greet function ke paas then greet function kisi bhi variable ke roop mein issh argument ko recieve karega matlab here greet mein yadi a parameter hua toh power_Call_another_function_as_Arguments = a hoga
then a ho jayega power_Call_another_function_as_Arguments  uske baad 
a() ko call karna ishe hin call back function bhi kehete hain*/




/* Another Example of call back function  */
let first_Function = ()=>
{
 console.log("hi iam first function ")
}
function second_function_CallfirstFunction(b)
{
    b()
    console.log("hi iam Second function ")
}

second_function_CallfirstFunction(first_Function)

/* here first function khud ko call nahi kar raha ,second function call kar raha hai first ko as a argument  here first_Function argument ho ke gaya second_function ke pass then second function recieve kiya first function ko as a b then b= first function now call b() means indirectly call first function   */


/* Another callback  example with anonymous function */



let abcd =(z)=>{
    z()
};

abcd(()=>
    {
     console.log("here abcd call directly call a function")
    }
);

/*  here when call abcd() then pura arrow as a argument store hua z pe then calling z() means call annonymous arrow function jisme console.log("here abcd call directly call a function") statement tha */