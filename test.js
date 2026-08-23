// let b = Number( prompt("Enter a number"))
// let c = Number (prompt ("enter 2nd numbert"))
// let ans = b*c
// console.log(ans)


/* let age = 90
if (age <18)
{
    console.log ("Not Eligible for vote")    
}
else if (age>55)
{
    console.log("you Are senior citizen")
}
else
{
    console.log("you are elegible for vote")
}

function add (num1,num2)
{
   result= num1+num2;
    return result
}
add(90,79);
console.log(result)

object.someMethod() */


/* function restParameter(num1,num2,num3)
{
    result = num1 + num2 + num3
    return result

    
}

console.log(restParameter(20,30,50)) */


// function restParameter(num1,num2,num3)
// {
//    return  num1 + num2 + num3

    
// }

// console.log(restParameter(20,30,50))







/* Another example */

/* function restParameter(num1,num2,num3,...rest)
{
    return num1 + num2 + num3 + rest

    
}
let result =restParameter(20,30,50,40,70,60,10)
console.log(result) */



// function test(a, b, ...rest)
// {
//     console.log(a);
//     console.log(b);
//     console.log(rest);
// }

// test(10, 20, 30, 40, 50);


/* using sum in rest  */

/* function restParameter(num1, num2, num3, ...rest)
{
    let sum = num1 + num2 + num3;

    for (let num of rest)
    {
        sum = sum + num;
    }

    return sum;
}

let result = restParameter(20, 30, 50, 40, 70, 60, 10);

console.log(result); */



/* function subtractTwonumber(a,b)
{
    var a;
    var b;
    result = a-b;
    console.log(result)
}
subtractTwonumber(10,8); */



/* 
function addTwonumber()
{
    let num1 = Number(prompt("enter 1st number"))
    let num2 = Number (prompt("Enter 2nd number"))
    return num1 + num2;
}
console.log(addTwonumber()); */




/* let addTwonumbers = ()=>
{
    let num1 = Number(prompt("enter 1st number"))
    let num2 = Number (prompt("Enter 2nd number"))
    return num1 + num2;
}
console.log(addTwonumbers());
 */


/* console.log((()=>
{
    let num1 = Number(prompt("enter 1st number"))
    let num2 = Number (prompt("Enter 2nd number"))
    return num1 + num2;
})()) */

/* 
let scope ="kirtiman"

function globalScope()
{
    console .log(scope)
}

globalScope() */

/* 

function scope()
{
    console.log(scopeAftercreatingFunction)
}

let scopeAftercreatingFunction = "kirtiman Senapati"

scope()
 */



// function printoutsideSope()
// {
//     let insidescope = "hi iam inside function so You donot accept Outside function"
// }
// console.log(insidescope)



/* 
let globalName = "hi iam global variable of function expression "
let expression = function ()
{
    console.log(globalName);
}
expression(); */




/* 
let expression2 = function ()
{
    console.log(scopeAftercreatingFunctionExpression)
}
let scopeAftercreatingFunctionExpression = "hi iam created lately outside after function "

expression2(); */




/* let taskOutsidefunction = function()
{
    let insidescope = "hi iam inside function so You donot accept Outside function"
}
console.log(insidescope)

taskOutsidefunction(); */


/* let c = function greet()
{
    console.log(greet);
} 
c()
 */
/* 
let b = function greet()
{
    
    console.log("hi iam tessing function expression with funcion name ");
} 
b(); */




/* let d = function greet()
{
    console.log("hi iam tessing function expression with funcion name ");
} 
greet(); */



// console.log(myName);
// function printName(){
//     let myName = "kirtiman";
// }
// printName()


/* printName1();
function printName1(){
    let myName = "kirtiman";
    console.log(myName)
} */

// printName2();
// let printName2 =function(){
//     let myName = "kirtiman";
//     console.log(myName)
// }


/* 
const greet = function(a) {
    a()
    console.log("Hello");
};



function power_Call_another_function_as_Arguments()
{
    
    console.log("hi i call/pass first function greet as a argument in 2nd function")
}

greet(power_Call_another_function_as_Arguments);
 */


//Variable mein store karna function ko as a value
/* const greet = function() {
    
    console.log("Hello");
};


//Function ko argument banana

function power_Call_another_function_as_Arguments()
{
    
    console.log("hi i call/pass first function greet as a argument in 2nd function")
}

//power_Call_another_function_as_Arguments(greet())
greet(power_Call_another_function_as_Arguments()) */




/* let first_Function = ()=>
{
 console.log("hi iam first function ")
}
function second_function_CallfirstFunction(a)
{
   a()
   
}

second_function_CallfirstFunction(first_Function) */





let abcd =(z)=>{
    z()
};

abcd(()=>{
    console.log("here abcd call directly call a function")
});